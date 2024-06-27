// @ts-nocheck
import { getFabricWindow } from '../../env';

export function requestAnimFrame(callback: Function): number {
  // todo
  // how to use requestAnimationFrame in HarmonyOS
  // use setTimeout to mock but it can be jagged
  // call cancelAnimFrame in case of memory leak?
  // return setTimeout(() => {
  //   callback()
  // }, 16)
  callback()
  // return getFabricWindow().requestAnimationFrame(callback);
}

export function cancelAnimFrame(handle: number): void {
  return clearTimeout(handle)
  // return getFabricWindow().cancelAnimationFrame(handle);
}
