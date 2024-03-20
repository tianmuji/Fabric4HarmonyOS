import type { Pattern } from './Pattern';

export type PatternRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

type ExportedKeys =
  | 'crossOrigin'
  | 'offsetX'
  | 'offsetY'
  | 'patternTransform'
  | 'repeat'
  | 'source';

export type PatternOptions = Partial<Pick<Pattern, ExportedKeys>> & {
  source: CanvasRenderingContext2D;
};

export type SerializedPatternOptions = PatternOptions & {
  type: 'pattern';
  source: string;
};