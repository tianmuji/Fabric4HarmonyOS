import type { TPointerEvent } from '../EventTypeDefs';
import type { ITextBehavior } from '../shapes/IText/ITextBehavior';
import { removeFromArray } from '../util/internals';
import type { Canvas as FabricCanvas } from './Canvas';

/**
 * In charge of synchronizing all interactive text instances of a canvas
 */
export class TextEditingManager {
  private targets: ITextBehavior[] = [];
  private declare target?: ITextBehavior;
  private __disposer: Function;

  constructor(canvas: FabricCanvas) {
    const cb = () => {
      const { hiddenTextarea } =
        (canvas.getActiveObject() as ITextBehavior) || {};
      // hiddenTextarea && hiddenTextarea.focus();
    };
    // todo
    // how to add event listener in HarmonyOS?
    const el = canvas.upperCanvasEl;
    // el.addEventListener('click', cb);
    // this.__disposer = () => el.removeEventListener('click', cb);
  }

  exitTextEditing() {
    this.target = undefined;
    this.targets.forEach((target) => {
      if (target.isEditing) {
        target.exitEditing();
      }
    });
  }

  add(target: ITextBehavior) {
    this.targets.push(target);
  }

  remove(target: ITextBehavior) {
    this.unregister(target);
    removeFromArray(this.targets, target);
  }

  register(target: ITextBehavior) {
    this.target = target;
  }

  unregister(target: ITextBehavior) {
    if (target === this.target) {
      this.target = undefined;
    }
  }

  onMouseMove(e: TPointerEvent) {
    this.target?.isEditing && this.target.updateSelectionOnMouseMove(e);
  }

  clear() {
    this.targets = [];
    this.target = undefined;
  }

  dispose() {
    this.clear();
    this.__disposer();
    delete this.__disposer;
  }
}
