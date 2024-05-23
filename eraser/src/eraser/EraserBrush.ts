import * as fabric from '@ohos/fabric';
import { FabricObject, Group, Path, TMat2D } from '@ohos/fabric';
import { ClippingGroup } from './ClippingGroup';
import { draw } from './ErasingEffect';
import { Observable } from '@ohos/fabric'
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";

export const drawImage = (
  destination: CanvasRenderingContext2D,
  source: CanvasRenderingContext2D,
  globalCompositeOperation: GlobalCompositeOperation = 'source-over'
) => {
  destination.save();
  destination.imageSmoothingEnabled = true;
  // destination.imageSmoothingQuality = 'high';
  destination.globalCompositeOperation = globalCompositeOperation;
  destination.resetTransform();
  const sourceData = source.getPixelMap(0, 0, source.width, source.height)
  destination.drawImage(sourceData, 0, 0);
  destination.restore();
};

/**
 *
 * @param destination context to erase
 * @param source context on which the path is drawn upon
 * @param erasingEffect effect to apply to {@link source} after clipping {@link destination}:
 * - drawing all non erasable visuals to achieve a selective erasing effect.
 * - drawing all erasable visuals without their erasers to achieve an undo erasing effect.
 */
export const erase = (
  destination: CanvasRenderingContext2D,
  source: CanvasRenderingContext2D,
  erasingEffect?: CanvasRenderingContext2D
) => {
  // clip destination
  drawImage(destination, source, 'destination-out');
  // draw erasing effect
  if (erasingEffect) {
    console.log('erasingEffect', 'erasingEffect')
    drawImage(source, erasingEffect, 'source-in');
  } else {
    source.save();
    source.resetTransform();
    source.clearRect(0, 0, source.width, source.height);
    source.restore();
  }
};

export type EventDetailMap = {
  start: fabric.TEvent<fabric.TPointerEvent>;
  move: fabric.TEvent<fabric.TPointerEvent>;
  end: {
    path: fabric.Path;
    targets: fabric.FabricObject[];
    detail: any
  };
  redraw: { type: 'start' | 'render' };
  cancel: never;
};

export type ErasingEventType = keyof EventDetailMap;

export interface CustomEvent<T = any> extends Observable<T> {
  /** Returns any custom data event was created with. Typically used for synthetic events. */
  readonly detail: T;
  /** @deprecated */
  initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}

export type ErasingEvent<T extends ErasingEventType> = CustomEvent<
  EventDetailMap[T]
>;

function walk(objects: FabricObject[], path: Path): FabricObject[] {
  return objects.flatMap((object) => {
    console.log(JSON.stringify(object.erasable))
    if (!object.erasable || !object.intersectsWithObject(path)) {
      return [];
    } else if (object instanceof Group && object.erasable === 'deep') {
      return walk(object.getObjects(), path);
    } else {
      return [object];
    }
  });
}

const assertClippingGroup = (object: fabric.FabricObject) => {
  const curr = object.clipPath;

  if (curr instanceof ClippingGroup) {
    return curr;
  }

  const next = new ClippingGroup([], {
    width: object.width,
    height: object.height,
  });

  if (curr) {
    const { x, y } = curr.translateToOriginPoint(
      new fabric.Point(),
      curr.originX,
      curr.originY
    );
    curr.originX = curr.originY = 'center';
    fabric.util.sendObjectToPlane(
      curr,
      undefined,
      fabric.util.createTranslateMatrix(x, y)
    );
    next.add(curr as FabricObject);
  }

  return (object.clipPath = next);
};

export function commitErasing(
  object: fabric.FabricObject,
  sourceInObjectPlane: fabric.Path
) {
  const clipPath = assertClippingGroup(object);
  clipPath.add(sourceInObjectPlane);
  clipPath.set('dirty', true);
  object.set('dirty', true);
}

export async function eraseObject(
  object: fabric.FabricObject,
  source: fabric.Path
) {
  const clone = await source.clone();
  fabric.util.sendObjectToPlane(clone, undefined, object.calcTransformMatrix());
  commitErasing(object, clone);
  return clone;
}

export async function eraseCanvasDrawable(
  object: fabric.FabricObject,
  vpt: fabric.TMat2D | undefined,
  source: fabric.Path
) {
  const clone = await source.clone();
  const d =
    vpt &&
    object.translateToOriginPoint(
      new fabric.Point(),
      object.originX,
      object.originY
    );
  fabric.util.sendObjectToPlane(
    clone,
    undefined,
    d
      ? fabric.util.multiplyTransformMatrixArray([
          [1, 0, 0, 1, d.x, d.y],
          // apply vpt from center of drawable
          vpt,
          [1, 0, 0, 1, -d.x, -d.y],
          object.calcTransformMatrix(),
        ]) as TMat2D
      : object.calcTransformMatrix()
  );
  commitErasing(object, clone);
  return clone;
}

// HarmonyOS does not recommend this
// set style in ets file instead

// const setCanvasDimensions = (
//   el: HTMLCanvasElement,
//   ctx: CanvasRenderingContext2D,
//   { width, height }: fabric.TSize,
//   retinaScaling = 1
// ) => {
//   el.width = width;
//   el.height = height;
//   if (retinaScaling > 1) {
//     el.setAttribute('width', (width * retinaScaling).toString());
//     el.setAttribute('height', (height * retinaScaling).toString());
//     ctx.scale(retinaScaling, retinaScaling);
//   }
// };

/**
 * Supports **selective** erasing: only erasable objects are affected by the eraser brush.
 *
 * Supports **{@link inverted}** erasing: the brush can "undo" erasing.
 *
 * Supports **alpha** erasing: setting the alpha channel of the `color` property controls the eraser intensity.
 *
 * In order to support selective erasing, the brush clips the entire canvas and
 * masks all non-erasable objects over the erased path, see {@link draw}.
 *
 * If **{@link inverted}** draws all objects, erasable objects without their eraser, over the erased path.
 * This achieves the desired effect of seeming to erase or undo erasing on erasable objects only.
 *
 * After erasing is done the `end` event {@link ErasingEndEvent} is fired, after which erasing will be committed to the tree.
 * @example
 * canvas = new Canvas();
 * const eraser = new EraserBrush(canvas);
 * canvas.freeDrawingBrush = eraser;
 * canvas.isDrawingMode = true;
 * eraser.on('start', (e) => {
 *    console.log('started erasing');
 *    // prevent erasing
 *    e.preventDefault();
 * });
 * eraser.on('end', (e) => {
 *    const { targets: erasedTargets, path } = e.detail;
 *    e.preventDefault(); // prevent erasing being committed to the tree
 *    eraser.commit({ targets: erasedTargets, path }); // commit manually since default was prevented
 * });
 *
 * In case of performance issues trace {@link drawEffect} calls and consider preventing it from executing
 * @example
 * const eraser = new EraserBrush(canvas);
 * eraser.on('redraw', (e) => {
 *    // prevent effect redraw on pointer down (e.g. useful if canvas didn't change)
 *    e.detail.type === 'start' && e.preventDefault());
 *    // prevent effect redraw after canvas has rendered (effect will become stale)
 *    e.detail.type === 'render' && e.preventDefault());
 * });
 */
export class EraserBrush extends fabric.PencilBrush {
  /**
   * When set to `true` the brush will create a visual effect of undoing erasing
   */
  inverted = false;

  effectContext: CanvasRenderingContext2D;

  private eventEmitter: Observable<any>;
  private active = false;
  private _disposer?: Function;

  constructor(canvas: fabric.Canvas, ctx: CanvasRenderingContext2D) {
    super(canvas);
    // setCanvasDimensions(el, ctx, canvas, this.canvas.getRetinaScaling());
    this.effectContext = ctx;
    this.eventEmitter = new Observable();
  }

  /**
   * @returns disposer make sure to call it to avoid memory leaks
   */
  on<T extends ErasingEventType>(
    type: T,
    cb: (evt: ErasingEvent<T>) => any,
    options?: boolean | any
  ) {
    // todo
    // do not need options
    this.eventEmitter.on(type, cb);
    return () =>
      this.eventEmitter.off(type, cb);
  }

  drawEffect() {
    draw(
      this.effectContext,
      {
        opacity: new fabric.Color(this.color).getAlpha(),
        inverted: this.inverted,
      },
      { canvas: this.canvas }
    );
  }

  /**
   * @override
   */
  _setBrushStyles(ctx: CanvasRenderingContext2D = this.canvas.contextTop) {
    super._setBrushStyles(this.canvas.contextTop);
    ctx.strokeStyle = 'black';
  }

  /**
   * @override strictly speaking the eraser needs a full render only if it has opacity set.
   * However since {@link PencilBrush} is designed for subclassing that is what we have to work with.
   */
  needsFullRender(): boolean {
    return true;
  }

  /**
   * @override erase
   */
  _render(ctx: CanvasRenderingContext2D = this.canvas.getTopContext()): void {
    super._render(ctx);
    erase(this.canvas.getContext(), ctx, this.effectContext);
  }

  /**
   * @override {@link drawEffect}
   */
  onMouseDown(
    pointer: fabric.Point,
    context: fabric.TEvent<fabric.TPointerEvent>
  ): void {
    // if (
    //   !this.eventEmitter.dispatchEvent(
    //     new CustomEvent('start', { detail: context, cancelable: true })
    //   )
    // ) {
    //   return;
    // }
    // todo
    // just fire event
    // ignore dispatchEvent return value
    this.eventEmitter.fire('start', { detail: context, cancelable: true })

    this.active = true;

    this.eventEmitter.fire(
      'redraw', {
        detail: { type: 'start' },
        cancelable: true,
      })
    console.log('erase start onmousedown')
    this.drawEffect()
    // consider a different approach
    this._disposer = this.canvas.on('after:render', ({ ctx }) => {
      // if (ctx !== this.canvas.getContext()) {
      //   return;
      // }
      this.eventEmitter.fire(
        'redraw', {
          detail: { type: 'render' },
          cancelable: true,
        })
      this.drawEffect();
      this._render();
    });

    super.onMouseDown(pointer, context);
  }

  /**
   * @override run if active
   */
  onMouseMove(
    pointer: fabric.Point,
    context: fabric.TEvent<fabric.TPointerEvent>
  ): void {
      // this.eventEmitter.dispatchEvent(
      //   new CustomEvent('move', { detail: context, cancelable: true })
      // )
      this.eventEmitter.fire('move', { detail: context, cancelable: true  })
      this.active && super.onMouseMove(pointer, context);
  }

  /**
   * @override run if active, dispose of {@link drawEffect} listener
   */
  onMouseUp(context: fabric.TEvent<fabric.TPointerEvent>): boolean {
    this.active && super.onMouseUp(context);
    this.active = false;
    this._disposer?.();
    delete this._disposer;
    return false;
  }

  /**
   * @override {@link fabric.PencilBrush} logic
   */
  convertPointsToSVGPath(points: fabric.Point[]): fabric.util.TSimplePathData {
    return super.convertPointsToSVGPath(
      this.decimate ? this.decimatePoints(points, this.decimate) : points
    );
  }

  /**
   * @override
   */
  createPath(pathData: fabric.util.TSimplePathData) {
    const path = super.createPath(pathData);
    path.set(
      this.inverted
        ? {
            globalCompositeOperation: 'source-over',
            stroke: 'white',
          }
        : {
            globalCompositeOperation: 'destination-out',
            stroke: 'black',
            opacity: new fabric.Color(this.color).getAlpha(),
          }
    );
    return path;
  }

  async commit({ path, targets }: EventDetailMap['end']) {
    new Map(
      await Promise.all([
        ...targets.map(async (object) => {
          return [object, await eraseObject(object, path)] as const;
        }),
        ...(
          [
            [
              this.canvas.backgroundImage,
              !this.canvas.backgroundVpt
                ? this.canvas.viewportTransform
                : undefined,
            ],
            [
              this.canvas.overlayImage,
              !this.canvas.overlayVpt
                ? this.canvas.viewportTransform
                : undefined,
            ],
          ] as const
        )
          .filter(([object]) => object)
          .map(async ([object, vptFlag]) => {
            return [
              object,
              await eraseCanvasDrawable(object as FabricObject, vptFlag, path),
            ] as const;
          }),
      ])
    );
  }

  /**
   * @override handle events
   */
  _finalizeAndAddPath(): void {
    const points = this['_points'];

    if (points.length <= 2) {
      // this.eventEmitter.dispatchEvent(
      //   new CustomEvent('cancel', {
      //     cancelable: false,
      //   })
      // );
      this.eventEmitter.fire('cancel', { cancelable: false })
      return;
    }

    // const path = this.createPath(this.convertPointsToSVGPath(points));
    // const targets = walk(this.canvas.getObjects(), path);

    // this.eventEmitter.dispatchEvent(
    //   new CustomEvent('end', {
    //     detail: {
    //       path,
    //       targets,
    //     },
    //     cancelable: true,
    //   })
    // )
    // this.eventEmitter.fire('end', {
    //   detail: {
    //     path,
    //     targets,
    //   },
    //   cancelable: true
    // })
    // this.commit({ path, targets });
    //
    // this.canvas.clearContext(this.canvas.contextTop);
    // this.canvas.requestRenderAll();

    // this._resetShadow();
  }

  dispose() {
    // const { canvas } = this.effectContext;
    // prompt GC
    // canvas.width = canvas.height = 0;
    // todo
    // emit dispose event?
    this.eventEmitter.fire('dispose')
    // emit
    // release ref?
    // delete this.effectContext
  }
}
