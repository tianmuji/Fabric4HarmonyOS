// import type { GLProbe } from '../filters/GLProbes/GLProbe';
import type { TextStyleDeclaration } from '../shapes/Text/StyledText';
import window from '@ohos.window';
export type TCopyPasteData = {
  copiedText?: string;
  copiedTextStyle?: TextStyleDeclaration[];
};
export type TFabricEnv = {
  readonly document: window.Window;
  readonly window: window.Window;
  readonly isTouchSupported: boolean;
  // WebGLProbe: GLProbe;
  dispose(): void;
  copyPasteData: TCopyPasteData;
};
