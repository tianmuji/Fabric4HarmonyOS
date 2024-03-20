import type { TPointerEvent } from '../EventTypeDefs';
import { Point } from '../Point';
import { getScrollLeftTop } from './dom_misc';

const touchEvents = ['touchstart', 'touchmove', 'touchend'];

// function getTouchInfo(event: TouchEvent | MouseEvent): MouseEvent | Touch {
//   const touchProp = (event as TouchEvent).changedTouches;
//   if (touchProp && touchProp[0]) {
//     return touchProp[0];
//   }
//   return event as MouseEvent;
// }
//

// this function returns the pointer position relatively to the document window
// in HarmonyOS
// it is windowX and windowY
export const getPointer = (event: TPointerEvent): Point => {
  // const element = event.target as HTMLElement,
  //   scroll = getScrollLeftTop(element),
  //   _evt = getTouchInfo(event);
  // return new Point(_evt.clientX + scroll.left, _evt.clientY + scroll.top);
  // @ts-ignore
  return new Point(event.windowX, event.windowY)
};

// HarmonyOS can tell if the event is TouchEvent or not
// but to make it work
// just to check if type exist in event
export const isTouchEvent = (event: TPointerEvent) => 'type' in event
  // touchEvents.includes(event.type) ||
  // (event as PointerEvent).pointerType === 'touch';

export const stopEvent = (e: TPointerEvent) => {
  // @ts-ignore
  // e.preventDefault();
  // @ts-ignore
  e.stopPropagation();
};
