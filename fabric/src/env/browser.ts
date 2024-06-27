/* eslint-disable no-restricted-globals */
// import { WebGLProbe } from '../filters/GLProbes/WebGLProbe';
import type { TCopyPasteData, TFabricEnv } from './types';
import window from '@ohos.window';
const copyPasteData: TCopyPasteData = {};

export const getEnv = (): TFabricEnv => {
  return {
    document: undefined,
    window: undefined,
    isTouchSupported: true,
    // WebGLProbe: new WebGLProbe(),
    dispose() {
      // noop
    },
    copyPasteData,
  };
};
