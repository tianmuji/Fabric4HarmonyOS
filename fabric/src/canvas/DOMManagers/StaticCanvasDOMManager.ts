import { getEnv, getFabricDocument } from '../../env';
import type { TSize } from '../../typedefs';
import type { CSSDimensions } from './util';
// import { setCSSDimensions, getElementOffset } from './util';
import { createCanvasElement, isHTMLCanvas } from '../../util/misc/dom';
// import { setCanvasDimensions } from './util';
import { FabricError } from '../../util/internals/console';

// el在dom中指canvas元素
// harmonyOS中 只需要使用 canvas上下文
// 所以删除el
export type CanvasItem = {
  ctx: CanvasRenderingContext2D;
};

export class StaticCanvasDOMManager {
  /**
   * Keeps a copy of the canvas style before setting retina scaling and other potions
   * in order to return it to original state on dispose
   * @type string
   */
  private _originalCanvasStyle?: string;
  private offsetWidth: number
  private offsetHeight: number

  lower: CanvasItem;

  // 参数必传 表示canvas绘图上下文
  // todo offset?
  constructor(ctx: CanvasRenderingContext2D) {
    this.lower = { ctx };
    // this.offsetWidth = offsetWidth
    // this.offsetHeight = offsetHeight
  }

  // harmonyOS 不支持创建dom元素
  // 直接删除
  // protected createLowerCanvas(arg0?: HTMLCanvasElement | string) {
  //   // canvasEl === 'HTMLCanvasElement' does not work on jsdom/node
  //   const el = isHTMLCanvas(arg0)
  //     ? arg0
  //     : (arg0 &&
  //         (getFabricDocument().getElementById(arg0) as HTMLCanvasElement)) ||
  //       createCanvasElement();
  //   if (el.hasAttribute('data-'fabric')) {
  //     throw new FabricError(
  //       'Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?'
  //     );
  //   }
  //   this._originalCanvasStyle = el.style.cssText;
  //   el.setAttribute('data-'fabric', 'main');
  //   el.classList.add('lower-canvas');
  //   return el;
  // }

  // harmonyOS 不支持创建dom元素
  // 直接删除
  // cleanupDOM({ width, height }: TSize) {
  //   const { el } = this.lower;
  //   // restore canvas style and attributes
  //   el.classList.remove('lower-canvas');
  //   el.removeAttribute('data-'fabric');
  //   // restore canvas size to original size in case retina scaling was applied
  //   el.setAttribute('width', `${width}`);
  //   el.setAttribute('height', `${height}`);
  //   el.style.cssText = this._originalCanvasStyle || '';
  //   this._originalCanvasStyle = undefined;
  // }

  //
  // setDimensions(size: TSize, retinaScaling: number) {
  //   const { ctx } = this.lower;
  //   setCanvasDimensions(el, ctx, size, retinaScaling);
  // }

  // setCSSDimensions(size: Partial<CSSDimensions>) {
  //   setCSSDimensions(this.lower.el, size);
  // }

  /**
   * Calculates canvas element offset relative to the document
   */
  // harmonyOS中传入
  // 如果canvas被移动了，这个要更新么？
  // 需要的 所以暴露一个设置offset的方法
  calcOffset() {
    return {
      left: this.offsetWidth,
      top: this.offsetHeight
    }
  }

  setOffset(width: number, height: number) {
    this.offsetHeight = height
    this.offsetWidth = width
  }

  // 父组件自行控制
  dispose() {
    // getEnv().dispose(this.lower.el);
    // // @ts-expect-error disposing
    // delete this.lower;
  }
}
