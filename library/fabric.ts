export { getEnv, getFabricWindow, setEnv } from './src/env';
export { cache } from './src/cache';
export { VERSION as version, iMatrix } from './src/constants';
export { config } from './src/config';
export { classRegistry } from './src/ClassRegistry';
export { runningAnimations } from './src/util/animation/AnimationRegistry';

export * from './src/typedefs';

export * from './src/EventTypeDefs';
export { Observable } from './src/Observable';
export interface TFabricConfig {
  radius: number, left: number, top: number, fill: string, strokeWidth: number, transparentCorners: false, erasable: boolean
}
export interface TestInterface {"type":"path","originX":"center","originY":"center","left":number,"top":number,"width":232,"height":49,"fill":null,"overlayFill":null,"stroke":"#aaf","strokeWidth":10,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":true,"transparentCorners":true,"TargetFind":false,"shadow":{"color":"#aaf","blur":0,"offsetX":0,"offsetY":0},"visible":true,"path":[["M",0,42],["Q",0,42,0,42],["Q",0,42,0.5,42],["Q",1,42,1,41.5],["Q",1,41,3,39],["Q",5,37,10.5,31],["Q",16,25,24.5,18],["Q",33,11,37,8],["Q",41,5,45.5,2.5],["Q",50,0,52.5,0],["Q",55,0,57,0],["Q",59,0,60,3],["Q",61,6,64,19.5],["Q",67,33,68,37],["Q",69,41,69.5,44],["Q",70,47,71.5,48],["Q",73,49,76,49],["Q",79,49,85.5,44],["Q",92,39,100.5,33],["Q",109,27,113.5,23],["Q",118,19,125.5,16],["Q",133,13,139.5,13.5],["Q",146,14,149,17.5],["Q",152,21,153.5,24],["Q",155,27,156.5,29.5],["Q",158,32,160.5,32.5],["Q",163,33,166,32],["Q",169,31,172,27.5],["Q",175,24,179,20.5],["Q",183,17,185.5,14.5],["Q",188,12,189.5,12],["Q",191,12,192.5,12],["Q",194,12,195.5,15],["Q",197,18,199,19.5],["Q",201,21,203,22.5],["Q",205,24,207.5,24],["Q",210,24,214.5,23.5],["Q",219,23,222.5,20.5],["Q",226,18,229,15.5],["L",232,13]],"pathOffset":{"x":116,"y":24.5}};

export interface TFabricEventMapper extends ClickEvent {
  stopPropagation: void
  timestamp: number,
}
export type {
  TCanvasSizeOptions,
  TSVGExportOptions,
} from './src/canvas/StaticCanvas';
export type { StaticCanvasOptions } from './src/canvas/StaticCanvasOptions';
export { StaticCanvas } from './src/canvas/StaticCanvas';
export { Canvas } from './src/canvas/Canvas';
export type { CanvasOptions } from './src/canvas/CanvasOptions';
export { CanvasDOMManager } from './src/canvas/DOMManagers/CanvasDOMManager';
export { StaticCanvasDOMManager } from './src/canvas/DOMManagers/StaticCanvasDOMManager';

export type { XY } from './src/Point';
export { Point } from './src/Point';
export type { IntersectionType } from './src/Intersection';
export { Intersection } from './src/Intersection';
export { Color } from './src/color/Color';
export * from './src/color/typedefs';

export * from './src/gradient';
export * from './src/Pattern';
export { Shadow } from './src/Shadow';
export type { SerializedShadowOptions } from './src/Shadow';

export { BaseBrush } from './src/brushes/BaseBrush';
export * from './src/brushes/typedefs';

export { PencilBrush } from './src/brushes/PencilBrush';
export { CircleBrush } from './src/brushes/CircleBrush';
export { SprayBrush } from './src/brushes/SprayBrush';
export { PatternBrush } from './src/brushes/PatternBrush';

export {
  FabricObject,

/**
 * @deprecated Due to a naming conflict with the
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object JS API},
 * `fabric.Object` has been renamed to `FabricObject`
 *
 * @example
 * import { Object } from 'fabric'; // deprecated
 * import { FabricObject } from 'fabric'; // migration path
 *
 */
  FabricObject as Object,
} from './src/shapes/Object/FabricObject';

export type {
  TFabricObjectProps,
  FabricObjectProps,
  SerializedObjectProps,
} from './src/shapes/Object/types';
export type { SerializedLineProps } from './src/shapes/Line';
export { Line } from './src/shapes/Line';
export type { CircleProps, SerializedCircleProps } from './src/shapes/Circle';
export { Circle } from './src/shapes/Circle';
export { Triangle } from './src/shapes/Triangle';
export type {
  EllipseProps,
  SerializedEllipseProps,
} from './src/shapes/Ellipse';
export { Ellipse } from './src/shapes/Ellipse';
export type { RectProps, SerializedRectProps } from './src/shapes/Rect';
export { Rect } from './src/shapes/Rect';
export type { PathProps, SerializedPathProps } from './src/shapes/Path';
export { Path } from './src/shapes/Path';
export type { SerializedPolylineProps } from './src/shapes/Polyline';
export { Polyline } from './src/shapes/Polyline';
export { Polygon } from './src/shapes/Polygon';
export type {
  GraphemeBBox,
  SerializedTextProps,
  TPathAlign,
  TPathSide,
  TextProps,
} from './src/shapes/Text/Text';
export {
  FabricText,
/**
 * @deprecated Due to a naming conflict with the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Text/Text Web API},
 * `fabric.Text` has been renamed to `FabricText`
 *
 * @example
 * import { Text } from 'fabric'; // deprecated
 * import { FabricText } from 'fabric'; // migration path
 *
 */
} from './src/shapes/Text/Text';
export type {
  ITextProps,
  SerializedITextProps,
} from './src/shapes/IText/IText';
export { IText } from './src/shapes/IText/IText';
export type {
  GraphemeData,
  SerializedTextboxProps,
  TextboxProps,
} from './src/shapes/Textbox';
export { Textbox } from './src/shapes/Textbox';
export type {
  CompleteTextStyleDeclaration,
  TextStyleDeclaration,
  TextStyle,
} from './src/shapes/Text/StyledText';
export type {
  GroupEvents,
  GroupProps,
  GroupOwnProps,
  SerializedGroupProps,
} from './src/shapes/Group';
export { Group } from './src/shapes/Group';
export * from './src/LayoutManager';
export type { SerializedLayoutManager } from './src/LayoutManager';
export type {
  ActiveSelectionOptions,
  MultiSelectionStacking,
} from './src/shapes/ActiveSelection';
export { ActiveSelection } from './src/shapes/ActiveSelection';
export {
  FabricImage,

/**
 * @deprecated Due to a naming conflict with the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image Web API},
 * `fabric.Image` has been renamed to `FabricImage`
 *
 * @example
 * import { Image } from 'fabric'; // deprecated
 * import { FabricImage } from 'fabric'; // migration path
 *
 */
} from './src/shapes/Image';
export type {
  ImageSource,
  SerializedImageProps,
  ImageProps,
} from './src/shapes/Image';
export { createCollectionMixin } from './src/Collection';

export * as util from './src/util';

// export { loadSVGFromString } from './src/parser/loadSVGFromString';
// export { loadSVGFromURL } from './src/parser/loadSVGFromURL';
// export { parseSVGDocument } from './src/parser/parseSVGDocument';

// todo convert tests to jest and stop exporting those.
// export { parseAttributes } from './src/parser/parseAttributes';
// export { parseStyleAttribute } from './src/parser/parseStyleAttribute';
// export { parsePointsAttribute } from './src/parser/parsePointsAttribute';
// export { parseTransformAttribute } from './src/parser/parseTransformAttribute';
// export { getCSSRules } from './src/parser/getCSSRules';
// export { parseFontDeclaration } from './src/parser/parseFontDeclaration';

export { Control } from './src/controls/Control';
export * as controlsUtils from './src/controls';

export { TPointerEvent } from './src/EventTypeDefs'
