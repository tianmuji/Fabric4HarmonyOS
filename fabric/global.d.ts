declare class CanvasPathNew {
  /**
   * Draw an arc path
   *
   * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } radius - Radius of the arc.
   * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
   * @param { number } endAngle - The end point of the arc, in radians.
   * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *    the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw an arc path
   *
   * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } radius - Radius of the arc.
   * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
   * @param { number } endAngle - The end point of the arc, in radians.
   * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *    the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw an arc path
   *
   * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } radius - Radius of the arc.
   * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
   * @param { number } endAngle - The end point of the arc, in radians.
   * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *    the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw an arc path
   *
   * @param { number } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { number } radius - Radius of the arc.
   * @param { number } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction. The unit is radian.
   * @param { number } endAngle - The end point of the arc, in radians.
   * @param { boolean } counterclockwise - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *    the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { number } x1 - The x-axis coordinate of the first control point.
   * @param { number } y1 - The y-axis coordinate of the first control point.
   * @param { number } x2 - The x-axis coordinate of the second control point.
   * @param { number } y2 - The y-axis coordinate of the second control point.
   * @param { number } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { number } x1 - The x-axis coordinate of the first control point.
   * @param { number } y1 - The y-axis coordinate of the first control point.
   * @param { number } x2 - The x-axis coordinate of the second control point.
   * @param { number } y2 - The y-axis coordinate of the second control point.
   * @param { number } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { number } x1 - The x-axis coordinate of the first control point.
   * @param { number } y1 - The y-axis coordinate of the first control point.
   * @param { number } x2 - The x-axis coordinate of the second control point.
   * @param { number } y2 - The y-axis coordinate of the second control point.
   * @param { number } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { number } x1 - The x-axis coordinate of the first control point.
   * @param { number } y1 - The y-axis coordinate of the first control point.
   * @param { number } x2 - The x-axis coordinate of the second control point.
   * @param { number } y2 - The y-axis coordinate of the second control point.
   * @param { number } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { number } cp1x - The x-axis coordinate of the first control point.
   * @param { number } cp1y - The y-axis coordinate of the first control point.
   * @param { number } cp2x - The x-axis coordinate of the second control point.
   * @param { number } cp2y - The y-axis coordinate of the second control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { number } cp1x - The x-axis coordinate of the first control point.
   * @param { number } cp1y - The y-axis coordinate of the first control point.
   * @param { number } cp2x - The x-axis coordinate of the second control point.
   * @param { number } cp2y - The y-axis coordinate of the second control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { number } cp1x - The x-axis coordinate of the first control point.
   * @param { number } cp1y - The y-axis coordinate of the first control point.
   * @param { number } cp2x - The x-axis coordinate of the second control point.
   * @param { number } cp2y - The y-axis coordinate of the second control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { number } cp1x - The x-axis coordinate of the first control point.
   * @param { number } cp1y - The y-axis coordinate of the first control point.
   * @param { number } cp2x - The x-axis coordinate of the second control point.
   * @param { number } cp2y - The y-axis coordinate of the second control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  closePath(): void;
  /**
   * Draw an Elliptic Path
   *
   * @param { number } x - x-axis coordinate of the center of the ellipse.
   * @param { number } y - y-axis coordinate of the center of the ellipse.
   * @param { number } radiusX - Radius of the major axis of the ellipse.
   * @param { number } radiusY - Radius of the minor axis of the ellipse.
   * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *    (not angular degrees).
   * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *    the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw an Elliptic Path
   *
   * @param { number } x - x-axis coordinate of the center of the ellipse.
   * @param { number } y - y-axis coordinate of the center of the ellipse.
   * @param { number } radiusX - Radius of the major axis of the ellipse.
   * @param { number } radiusY - Radius of the minor axis of the ellipse.
   * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *    (not angular degrees).
   * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *    the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw an Elliptic Path
   *
   * @param { number } x - x-axis coordinate of the center of the ellipse.
   * @param { number } y - y-axis coordinate of the center of the ellipse.
   * @param { number } radiusX - Radius of the major axis of the ellipse.
   * @param { number } radiusY - Radius of the minor axis of the ellipse.
   * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *    (not angular degrees).
   * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *    the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw an Elliptic Path
   *
   * @param { number } x - x-axis coordinate of the center of the ellipse.
   * @param { number } y - y-axis coordinate of the center of the ellipse.
   * @param { number } radiusX - Radius of the major axis of the ellipse.
   * @param { number } radiusY - Radius of the minor axis of the ellipse.
   * @param { number } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { number } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *    (not angular degrees).
   * @param { number } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } counterclockwise - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *    the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
  /**
   * Connect sub-path using straight lines
   *
   * @param { number } x - The x-axis coordinate of the end point of the line.
   * @param { number } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Connect sub-path using straight lines
   *
   * @param { number } x - The x-axis coordinate of the end point of the line.
   * @param { number } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Connect sub-path using straight lines
   *
   * @param { number } x - The x-axis coordinate of the end point of the line.
   * @param { number } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Connect sub-path using straight lines
   *
   * @param { number } x - The x-axis coordinate of the end point of the line.
   * @param { number } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  lineTo(x: number, y: number): void;
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { number } x - The x-axis coordinate of the point.
   * @param { number } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { number } x - The x-axis coordinate of the point.
   * @param { number } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { number } x - The x-axis coordinate of the point.
   * @param { number } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { number } x - The x-axis coordinate of the point.
   * @param { number } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  moveTo(x: number, y: number): void;
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { number } cpx - The x-axis coordinate of the control point.
   * @param { number } cpy - The y-axis coordinate of the control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { number } cpx - The x-axis coordinate of the control point.
   * @param { number } cpy - The y-axis coordinate of the control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { number } cpx - The x-axis coordinate of the control point.
   * @param { number } cpy - The y-axis coordinate of the control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { number } cpx - The x-axis coordinate of the control point.
   * @param { number } cpy - The y-axis coordinate of the control point.
   * @param { number } x - x-axis coordinate of the end point.
   * @param { number } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  /**
   * Draw Rectangular Paths
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw Rectangular Paths
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw Rectangular Paths
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw Rectangular Paths
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  rect(x: number, y: number, w: number, h: number): void;
}
declare class CanvasRenderer1 extends CanvasPathNew {
  /**
   * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   *    The default value is 1.0. If the value is out of range, the assignment is invalid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   *    The default value is 1.0. If the value is out of range, the assignment is invalid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   *    The default value is 1.0. If the value is out of range, the assignment is invalid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Transparency. The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   *    The default value is 1.0. If the value is out of range, the assignment is invalid.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  globalAlpha: number;
  /**
   * Type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Type of composition operation applied when drawing a new shape. The following types are supported:
   * source-over: (Default) Draws a new drawing on top of an existing canvas context.
   * source-in: The new drawing is drawn only where the new drawing overlaps the target canvas.
   *    Everything else is transparent.
   * source-out: Draws a new drawing where it does not overlap with the existing canvas content.
   * source-atop: The new drawing is drawn only where it overlaps the content of the existing canvas.
   * destination-over: Draws a new graphic behind the existing canvas content.
   * destination-in: Existing canvas content remains where the new drawing overlaps the existing canvas content.
   *    Everything else is transparent.
   * destination-out: Existing content remains where the new drawing does not overlap.
   * destination-atop: The existing canvas retains only the part that overlaps with the new drawing,
   *    which is drawn behind the canvas content.
   * lighter: The color of two overlapping shapes is determined by adding the color values.
   * copy: Only new graphics are displayed.
   * xor: In the image, those overlaps and other places outside of the normal drawing are transparent.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  globalCompositeOperation: string;
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void;
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number, dw: number, dh: number): void;
  /**
   *Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
   * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   *Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
   * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   *Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
   * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   *Draw an image on a canvas
   *
   * @param { ImageBitmap | PixelMap } image - Picture objects drawn to the canvas.
   * @param { number } sx - x coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sy - y coordinate of the upper left corner of the rectangle (cropping) selection box of the image.
   * @param { number } sw - Width of the rectangle (cropping) selection box of the image.
   * @param { number } sh - Height of the rectangle (cropping) selection box of the image.
   * @param { number } dx - x-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dy - y-axis coordinate of the upper left corner of the image on the target canvas.
   * @param { number } dw - Specifies the drawing width of the image on the target canvas. The width of the drawn image will be scaled.
   * @param { number } dh - Specifies the drawing height of the image on the target canvas. The height of the drawn image will be scaled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  drawImage(image: ImageBitmap | PixelMap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
  /**
   * Clear the sub-path list and start a new path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Clear the sub-path list and start a new path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Clear the sub-path list and start a new path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Clear the sub-path list and start a new path.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  beginPath(): void;
  /**
   * Sets the currently created path as the current clipping path
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the currently created path as the current clipping path
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the currently created path as the current clipping path
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Sets the currently created path as the current clipping path
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  clip(fillRule?: CanvasFillRule): void;
  /**
   * Tailoring according to the specified path
   *
   * @param { Path2D } path - Path to be cut.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Tailoring according to the specified path
   *
   * @param { Path2D } path - Path to be cut.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Tailoring according to the specified path
   *
   * @param { Path2D } path - Path to be cut.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Tailoring according to the specified path
   *
   * @param { Path2D } path - Path to be cut.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * Fills existing paths according to the current fill style.
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Fills existing paths according to the current fill style.
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Fills existing paths according to the current fill style.
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Fills existing paths according to the current fill style.
   *
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fill(fillRule?: CanvasFillRule): void;
  /**
   * Fills the specified path according to the current fill style
   *
   * @param { Path2D } path - Path to be filled.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Fills the specified path according to the current fill style
   *
   * @param { Path2D } path - Path to be filled.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Fills the specified path according to the current fill style
   *
   * @param { Path2D } path - Path to be filled.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Fills the specified path according to the current fill style
   *
   * @param { Path2D } path - Path to be filled.
   * @param { CanvasFillRule } fillRule - Algorithm rule. For details, see {@link CanvasFillRule}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * Draws an existing path according to the current stroke style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draws an existing path according to the current stroke style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draws an existing path according to the current stroke style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draws an existing path according to the current stroke style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  stroke(): void;
  /**
   * Draws the specified path according to the current stroke style
   *
   * @param { Path2D } path - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draws the specified path according to the current stroke style
   *
   * @param { Path2D } path - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draws the specified path according to the current stroke style
   *
   * @param { Path2D } path - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draws the specified path according to the current stroke style
   *
   * @param { Path2D } path - Specified stroke path object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  stroke(path: Path2D): void;
  /**
   * Attributes that describe the fill color and style. The default value is # 000 (black). The options are as follows:
   * color: Color String
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   *
   * @type { string | CanvasGradient | CanvasPattern }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Attributes that describe the fill color and style. The default value is # 000 (black). The options are as follows:
   * color: Color String
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   *
   * @type { string | CanvasGradient | CanvasPattern }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Attributes that describe the fill color and style. The default value is # 000 (black). The options are as follows:
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * string: Color String.
   * number: Indicates the color with number.
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Attributes that describe the fill color and style. The default value is # 000 (black). The options are as follows:
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * string: Color String.
   * number: Indicates the color with number.
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fillStyle: string | number | CanvasGradient | CanvasPattern;
  /**
   * Attributes of the stroke color and style. The default value is # 000 (black). The options are as follows:
   * color: Color String
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   *
   * @type { string | CanvasGradient | CanvasPattern }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Attributes of the stroke color and style. The default value is # 000 (black). The options are as follows:
   * color: Color String
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   *
   * @type { string | CanvasGradient | CanvasPattern }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Attributes of the stroke color and style. The default value is # 000 (black). The options are as follows:
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * string: Color String.
   * number: Indicates the color with number.
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Attributes of the stroke color and style. The default value is # 000 (black). The options are as follows:
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * string: Color String.
   * number: Indicates the color with number.
   * CanvasGradient: Color gradient object. For details, see {@link CanvasGradient}.
   * CanvasPattern: Template object. For details, see {@link CanvasPattern}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  strokeStyle: string | number | CanvasGradient | CanvasPattern;
  /**
   * Creates a linear gradient object that is specified along the parameter coordinates
   *
   * @param { number } x0 - The x-axis coordinate of the start point.
   * @param { number } y0 - The y-axis coordinate of the start point.
   * @param { number } x1 - x-axis coordinate of the end point.
   * @param { number } y1 - y-axis coordinate of the end point.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Creates a linear gradient object that is specified along the parameter coordinates
   *
   * @param { number } x0 - The x-axis coordinate of the start point.
   * @param { number } y0 - The y-axis coordinate of the start point.
   * @param { number } x1 - x-axis coordinate of the end point.
   * @param { number } y1 - y-axis coordinate of the end point.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Creates a linear gradient object that is specified along the parameter coordinates
   *
   * @param { number } x0 - The x-axis coordinate of the start point.
   * @param { number } y0 - The y-axis coordinate of the start point.
   * @param { number } x1 - x-axis coordinate of the end point.
   * @param { number } y1 - y-axis coordinate of the end point.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Creates a linear gradient object that is specified along the parameter coordinates
   *
   * @param { number } x0 - The x-axis coordinate of the start point.
   * @param { number } y0 - The y-axis coordinate of the start point.
   * @param { number } x1 - x-axis coordinate of the end point.
   * @param { number } y1 - y-axis coordinate of the end point.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  /**
   * Creates a template object using the specified image
   *
   * @param { ImageBitmap } image - Objects as duplicate image sources
   * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
   * "repeat": Repeated images in both X and Y directions
   * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
   * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
   * "no-repeat": Non-repeating images in both X and Y directions
   * @returns { CanvasPattern | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Creates a template object using the specified image
   *
   * @param { ImageBitmap } image - Objects as duplicate image sources
   * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
   * "repeat": Repeated images in both X and Y directions
   * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
   * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
   * "no-repeat": Non-repeating images in both X and Y directions
   * @returns { CanvasPattern | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Creates a template object using the specified image
   *
   * @param { ImageBitmap } image - Objects as duplicate image sources
   * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
   * "repeat": Repeated images in both X and Y directions
   * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
   * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
   * "no-repeat": Non-repeating images in both X and Y directions
   * "clamp": Replicate the edge color if the shader draws outside of its original bounds.
   * "mirror": Repeat the shader's image horizontally and vertically, alternating mirror images so that adjacent images always seam.
   * @returns { CanvasPattern | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Creates a template object using the specified image
   *
   * @param { ImageBitmap } image - Objects as duplicate image sources
   * @param { string | null } repetition - Specifies how to repeat images. The following four modes are supported:
   * "repeat": Repeated images in both X and Y directions
   * "repeat-x": Repeated images in the X-axis direction but not in the Y-axis direction
   * "repeat-y": The image is repeated in the Y axis direction, and the image is not repeated in the X axis direction.
   * "no-repeat": Non-repeating images in both X and Y directions
   * "clamp": Replicate the edge color if the shader draws outside of its original bounds.
   * "mirror": Repeat the shader's image horizontally and vertically, alternating mirror images so that adjacent images always seam.
   * @returns { CanvasPattern | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;
  /**
   * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
   *
   * @param { number } x0 - The x-axis coordinate of the start circle.
   * @param { number } y0 - The y-axis coordinate of the start circle.
   * @param { number } r0 - Radius of the starting circle.
   * @param { number } x1 - The x-axis coordinate of the end circle.
   * @param { number } y1 - The y-axis coordinate of the end circle.
   * @param { number } r1 - Radius of the end circle.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
   *
   * @param { number } x0 - The x-axis coordinate of the start circle.
   * @param { number } y0 - The y-axis coordinate of the start circle.
   * @param { number } r0 - Radius of the starting circle.
   * @param { number } x1 - The x-axis coordinate of the end circle.
   * @param { number } y1 - The y-axis coordinate of the end circle.
   * @param { number } r1 - Radius of the end circle.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
   *
   * @param { number } x0 - The x-axis coordinate of the start circle.
   * @param { number } y0 - The y-axis coordinate of the start circle.
   * @param { number } r0 - Radius of the starting circle.
   * @param { number } x1 - The x-axis coordinate of the end circle.
   * @param { number } y1 - The y-axis coordinate of the end circle.
   * @param { number } r1 - Radius of the end circle.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Creates a radioactive gradient object based on parameters that determine the coordinates of two circles
   *
   * @param { number } x0 - The x-axis coordinate of the start circle.
   * @param { number } y0 - The y-axis coordinate of the start circle.
   * @param { number } r0 - Radius of the starting circle.
   * @param { number } x1 - The x-axis coordinate of the end circle.
   * @param { number } y1 - The y-axis coordinate of the end circle.
   * @param { number } r1 - Radius of the end circle.
   * @returns { CanvasGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
  /**
   * Creates a gradient around a point with given coordinates.
   *
   * @param { number } startAngle - The angle at which to begin the gradient, in radians.
   *                   Angle measurements start horizontally the right of the center and move around clockwise.
   * @param { number } x - The x-axis coordinate of the center of the gradient.
   * @param { number } y - The y-axis coordinate of the center of the gradient.
   * @returns { CanvasGradient } A CanvasGradient object that draws a conic gradient around the given coordinates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Creates a gradient around a point with given coordinates.
   *
   * @param { number } startAngle - The angle at which to begin the gradient, in radians.
   *                   Angle measurements start horizontally the right of the center and move around clockwise.
   * @param { number } x - The x-axis coordinate of the center of the gradient.
   * @param { number } y - The y-axis coordinate of the center of the gradient.
   * @returns { CanvasGradient } A CanvasGradient object that draws a conic gradient around the given coordinates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
  /**
   * Provides filter effects such as blur and grayscale. You can set the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
   *    When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
   *    When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
   *    the image is completely inverted. When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
   *    When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
   *    When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
   *    When the value is 0%, there is no change in the image.
   * none: Turn off filter effects
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Provides filter effects such as blur and grayscale. You can set the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
   *    When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
   *    When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
   *    the image is completely inverted. When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
   *    When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
   *    When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
   *    When the value is 0%, there is no change in the image.
   * none: Turn off filter effects
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Provides filter effects such as blur and grayscale. You can set the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
   *    When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
   *    When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
   *    the image is completely inverted. When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
   *    When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
   *    When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
   *    When the value is 0%, there is no change in the image.
   * none: Turn off filter effects
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Provides filter effects such as blur and grayscale. You can set the following filter effects:
   * blur(<length>): Adds a Gaussian blur effect to the drawing
   * brightness(<percentage>): Provides a linear multiplication for the drawing and adjusts the brightness level.
   * contrast(<percentage>): Adjusts the contrast of the image. When the value is 0%, the image is completely black.
   *    When the value is 100%, there is no change in the image.
   * grayscale(<percentage>): Converts the image to a gray image. When the value is 100%, the image is completely gray.
   *    When the value is 0%, there is no change in the image.
   * hue-rotate(<degree>): Perform color rotation on an image. When the value is 0 degrees, there is no change in the image.
   * invert(<percentage>): Inverted image (representing the effect of a photographic negative). When the value is 100%,
   *    the image is completely inverted. When the value is 0%, there is no change in the image.
   * opacity(<percentage>): Transparency of the image. At 0%, the image is completely transparent.
   *    When the value is 100%, there is no change in the image.
   * saturate(<percentage>): Perform saturation processing on the image. At 0%, the image is completely un-saturated.
   *    When the value is 100%, there is no change in the image.
   * sepia(<percentage>): The image is sepia (nostalgic style). At 100%, the image turns completely sepia.
   *    When the value is 0%, there is no change in the image.
   * none: Turn off filter effects
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  filter: string;
  /**
   * Creates a new, empty ImageData object of the specified size
   *
   * @param { number } sw - Width of the ImageData object.
   * @param { number } sh - Height of the ImageData object.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Creates a new, empty ImageData object of the specified size
   *
   * @param { number } sw - Width of the ImageData object.
   * @param { number } sh - Height of the ImageData object.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Creates a new, empty ImageData object of the specified size
   *
   * @param { number } sw - Width of the ImageData object.
   * @param { number } sh - Height of the ImageData object.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Creates a new, empty ImageData object of the specified size
   *
   * @param { number } sw - Width of the ImageData object.
   * @param { number } sh - Height of the ImageData object.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  createImageData(sw: number, sh: number): ImageData;
  /**
   * From an existing ImageData object, copy an object with the same width and height as the image.
   *    The image content is not copied.
   *
   * @param { ImageData } imagedata - ImageData object to be copied.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * From an existing ImageData object, copy an object with the same width and height as the image.
   *    The image content is not copied.
   *
   * @param { ImageData } imagedata - ImageData object to be copied.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * From an existing ImageData object, copy an object with the same width and height as the image.
   *    The image content is not copied.
   *
   * @param { ImageData } imagedata - ImageData object to be copied.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * From an existing ImageData object, copy an object with the same width and height as the image.
   *    The image content is not copied.
   *
   * @param { ImageData } imagedata - ImageData object to be copied.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  createImageData(imagedata: ImageData): ImageData;
  /**
   * Obtains the pixel data of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sw - The width of the rectangular area of the image data to be extracted.
   * @param { number } sh - The height of the rectangular area of the image data to be extracted.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the pixel data of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sw - The width of the rectangular area of the image data to be extracted.
   * @param { number } sh - The height of the rectangular area of the image data to be extracted.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Obtains the pixel data of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sw - The width of the rectangular area of the image data to be extracted.
   * @param { number } sh - The height of the rectangular area of the image data to be extracted.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Obtains the pixel data of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the image data to be extracted.
   * @param { number } sw - The width of the rectangular area of the image data to be extracted.
   * @param { number } sh - The height of the rectangular area of the image data to be extracted.
   * @returns { ImageData }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
  /**
   * Obtains the PixelMap of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
   * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
   * @returns { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the PixelMap of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
   * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
   * @returns { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the PixelMap of a specified area on the current canvas.
   *
   * @param { number } sx - x coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sy - y coordinate of the upper left corner of the rectangular area of the PixelMap to be extracted.
   * @param { number } sw - The width of the rectangular area of the PixelMap to be extracted.
   * @param { number } sh - The height of the rectangular area of the PixelMap to be extracted.
   * @returns { PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap;
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  putImageData(imagedata: ImageData, dx: number | string, dy: number | string): void;
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @param { number } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (x coordinate) of the entire image data.
   * @param { number } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (y coordinate) of the entire image data.
   * @param { number } dirtyWidth - Width of the rectangular area in the source image data.
   *    The default is the width of the image data.
   * @param { number } dirtyHeight - Height of the rectangular area in the source image data.
   *    The default is the height of the image data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @param { number } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (x coordinate) of the entire image data.
   * @param { number } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (y coordinate) of the entire image data.
   * @param { number } dirtyWidth - Width of the rectangular area in the source image data.
   *    The default is the width of the image data.
   * @param { number } dirtyHeight - Height of the rectangular area in the source image data.
   *    The default is the height of the image data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @param { number | string } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (x coordinate) of the entire image data.
   * @param { number | string } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (y coordinate) of the entire image data.
   * @param { number | string } dirtyWidth - Width of the rectangular area in the source image data.
   *    The default is the width of the image data.
   * @param { number | string } dirtyHeight - Height of the rectangular area in the source image data.
   *    The default is the height of the image data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Draws the specified ImageData object onto the canvas
   *
   * @param { ImageData } imagedata - ImageData object to be drawn.
   * @param { number | string } dx - Position offset of the source image data in the target canvas (the offset in the x-axis direction).
   * @param { number | string } dy - Position offset of the source image data in the target canvas (the offset in the y-axis direction).
   * @param { number | string } dirtyX - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (x coordinate) of the entire image data.
   * @param { number | string } dirtyY - Position of the upper left corner of the rectangular area in the source image data.
   *    The default is the upper left corner (y coordinate) of the entire image data.
   * @param { number | string } dirtyWidth - Width of the rectangular area in the source image data.
   *    The default is the width of the image data.
   * @param { number | string } dirtyHeight - Height of the rectangular area in the source image data.
   *    The default is the height of the image data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  putImageData(imagedata: ImageData, dx: number | string, dy: number | string, dirtyX: number | string, dirtyY: number | string, dirtyWidth: number | string, dirtyHeight: number | string): void;
  /**
   * Specifies whether to smooth the image. The value true indicates that the image is smooth (default value).
   *    The value false indicates that the image is not smooth.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Specifies whether to smooth the image. The value true indicates that the image is smooth (default value).
   *    The value false indicates that the image is not smooth.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Specifies whether to smooth the image. The value true indicates that the image is smooth (default value).
   *    The value false indicates that the image is not smooth.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Specifies whether to smooth the image. The value true indicates that the image is smooth (default value).
   *    The value false indicates that the image is not smooth.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  imageSmoothingEnabled: boolean;
  /**
   * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @type { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @type { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @type { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Smoothness level of the current image. For details, see {@link ImageSmoothingQuality}.
   *
   * @type { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  imageSmoothingQuality: ImageSmoothingQuality;
  /**
   * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @type { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @type { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @type { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Line segment endpoint attribute. For details, see {@link CanvasLineCap}.
   *
   * @type { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  lineCap: CanvasLineCap;
  /**
   * Dotted line offset attribute. The default value is 0.0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Dotted line offset attribute. The default value is 0.0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Dotted line offset attribute. The default value is 0.0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Dotted line offset attribute. The default value is 0.0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  lineDashOffset: number;
  /**
   * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @type { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @type { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @type { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Line segment connection point attribute. For details, see {@link CanvasLineJoin}.
   *
   * @type { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  lineJoin: CanvasLineJoin;
  /**
   * Line thickness attribute. The value cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Line thickness attribute. The value cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Line thickness attribute. The value cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Line thickness attribute. The value cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  lineWidth: number;
  /**
   * The value of this parameter cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The value of this parameter cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * The value of this parameter cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * The value of this parameter cannot be 0 or a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  miterLimit: number;
  /**
   * Gets the current segment style.
   *
   * @returns { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Gets the current segment style.
   *
   * @returns { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Gets the current segment style.
   *
   * @returns { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Gets the current segment style.
   *
   * @returns { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  getLineDash(): number[];
  /**
   * Sets the dashed line mode for line drawing.
   *
   * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
   *    spacing (coordinate space units).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the dashed line mode for line drawing.
   *
   * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
   *    spacing (coordinate space units).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Sets the dashed line mode for line drawing.
   *
   * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
   *    spacing (coordinate space units).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Sets the dashed line mode for line drawing.
   *
   * @param { number[] } segments - A set of numbers that describe the length of alternating drawn lines segments and
   *    spacing (coordinate space units).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  setLineDash(segments: number[]): void;
  /**
   * Clears the drawing content of a rectangular area.
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Clears the drawing content of a rectangular area.
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Clears the drawing content of a rectangular area.
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Clears the drawing content of a rectangular area.
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  clearRect(x: number, y: number, w: number, h: number): void;
  /**
   * Fills a specified rectangular area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Fills a specified rectangular area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Fills a specified rectangular area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Fills a specified rectangular area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fillRect(x: number, y: number, w: number, h: number): void;
  /**
   * Stroke Specify Rectangular Area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Stroke Specify Rectangular Area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Stroke Specify Rectangular Area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Stroke Specify Rectangular Area
   *
   * @param { number } x - The x-axis coordinate of the start point of the rectangle.
   * @param { number } y - The y-axis coordinate of the start point of the rectangle.
   * @param { number } w - Width of the rectangle.
   * @param { number } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  strokeRect(x: number, y: number, w: number, h: number): void;
  /**
   * Shadow blur radius. The default value is 0. The value cannot be a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Shadow blur radius. The default value is 0. The value cannot be a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Shadow blur radius. The default value is 0. The value cannot be a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Shadow blur radius. The default value is 0. The value cannot be a negative number.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  shadowBlur: number;
  /**
   * Shadow color. The default value is transparent black.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Shadow color. The default value is transparent black.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Shadow color. The default value is transparent black.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Shadow color. The default value is transparent black.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  shadowColor: string;
  /**
   * Horizontal offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Horizontal offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Horizontal offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Horizontal offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  shadowOffsetX: number;
  /**
   * Vertical offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Vertical offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Vertical offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Vertical offset distance of the shadow. The default value is 0.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  shadowOffsetY: number;
  /**
   * Top of the stack pop-up state in the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Top of the stack pop-up state in the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Top of the stack pop-up state in the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Top of the stack pop-up state in the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  restore(): void;
  /**
   * Saves the current drawing state to the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Saves the current drawing state to the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Saves the current drawing state to the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Saves the current drawing state to the drawing state stack
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  save(): void;
  /**
   * Fills the specified text at the specified location
   *
   * @param { string } text - Text string to be drawn.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Fills the specified text at the specified location
   *
   * @param { string } text - Text string to be drawn.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Fills the specified text at the specified location
   *
   * @param { string } text - Text string to be drawn.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Fills the specified text at the specified location
   *
   * @param { string } text - Text string to be drawn.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  /**
   * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
   *
   * @param { string } text - Text string to be measured.
   * @returns { TextMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
   *
   * @param { string } text - Text string to be measured.
   * @returns { TextMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
   *
   * @param { string } text - Text string to be measured.
   * @returns { TextMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Measure the size of a specified text. For details about the return value, see {@link TextMetrics}.
   *
   * @param { string } text - Text string to be measured.
   * @returns { TextMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  measureText(text: string): TextMetrics;
  /**
   * Stroke specified text at specified position
   *
   * @param { string } text - Text string to be stroked.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the stroke.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Stroke specified text at specified position
   *
   * @param { string } text - Text string to be stroked.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the stroke.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Stroke specified text at specified position
   *
   * @param { string } text - Text string to be stroked.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the stroke.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Stroke specified text at specified position
   *
   * @param { string } text - Text string to be stroked.
   * @param { number } x - The x-axis coordinate of the start point of the text.
   * @param { number } y - The y-axis-axis coordinate of the start point of the text.
   * @param { number } maxWidth - Maximum width of the stroke.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
  /**
   * Text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Text drawing direction. For details, see {@link CanvasDirection}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  direction: CanvasDirection;
  /**
   * Font style. The default value is 14px sans-serif.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Font style. The default value is 14px sans-serif.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Font style. The default value is 14px sans-serif.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Font style. The default value is 14px sans-serif.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  font: string;
  /**
   * Text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @type { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @type { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @type { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Text alignment mode. For details, see {@link CanvasTextAlign}.
   *
   * @type { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  textAlign: CanvasTextAlign;
  /**
   * Text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @type { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @type { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @type { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Text baseline. For details, see {@link CanvasTextBaseline}.
   *
   * @type { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  textBaseline: CanvasTextBaseline;
  /**
   * Obtains the currently applied transformation matrix.
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the currently applied transformation matrix.
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Obtains the currently applied transformation matrix.
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Obtains the currently applied transformation matrix.
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  getTransform(): Matrix2D;
  /**
   * Resets the current transformation matrix using the identity matrix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Resets the current transformation matrix using the identity matrix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Resets the current transformation matrix using the identity matrix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Resets the current transformation matrix using the identity matrix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  resetTransform(): void;
  /**
   * Adds the effect of a rotation
   *
   * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
   *    degree * Math.PI / 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds the effect of a rotation
   *
   * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
   *    degree * Math.PI / 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Adds the effect of a rotation
   *
   * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
   *    degree * Math.PI / 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Adds the effect of a rotation
   *
   * @param { number } angle - The radian of clockwise rotation, which can be converted to an angle value using the formula:
   *    degree * Math.PI / 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  rotate(angle: number): void;
  /**
   * Increases the scaling effect of the X and Y axes.
   *
   * @param { number } x - Horizontal scaling factor
   * @param { number } y - Vertical scaling factor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Increases the scaling effect of the X and Y axes.
   *
   * @param { number } x - Horizontal scaling factor
   * @param { number } y - Vertical scaling factor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Increases the scaling effect of the X and Y axes.
   *
   * @param { number } x - Horizontal scaling factor
   * @param { number } y - Vertical scaling factor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Increases the scaling effect of the X and Y axes.
   *
   * @param { number } x - Horizontal scaling factor
   * @param { number } y - Vertical scaling factor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  scale(x: number, y: number): void;
  /**
   * Adds 2D transformation effects, including rotation, translation, and scaling.
   *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds 2D transformation effects, including rotation, translation, and scaling.
   *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Adds 2D transformation effects, including rotation, translation, and scaling.
   *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Adds 2D transformation effects, including rotation, translation, and scaling.
   *    The current transformation matrix will not be overwritten. Multiple transformations will be superimposed.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  /**
   * The 2D transformation effect is added. The current transformation matrix is not overwritten and
   *    the transformations are superimposed for multiple times.
   *
   * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The 2D transformation effect is added. The current transformation matrix is not overwritten and
   *    the transformations are superimposed for multiple times.
   *
   * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * The 2D transformation effect is added. The current transformation matrix is not overwritten and
   *    the transformations are superimposed for multiple times.
   *
   * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * The 2D transformation effect is added. The current transformation matrix is not overwritten and
   *    the transformations are superimposed for multiple times.
   *
   * @param { Matrix2D } transform - 2D transformation matrix. For details, see {@link Matrix2D}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  setTransform(transform?: Matrix2D): void;
  /**
   * Adds the 2D transformation effect, including rotation, translation, and scaling,
   *    and overwrites the current transformation matrix.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds the 2D transformation effect, including rotation, translation, and scaling,
   *    and overwrites the current transformation matrix.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Adds the 2D transformation effect, including rotation, translation, and scaling,
   *    and overwrites the current transformation matrix.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Adds the 2D transformation effect, including rotation, translation, and scaling,
   *    and overwrites the current transformation matrix.
   *
   * @param { number } a - Horizontal Zoom
   * @param { number } b - Vertical Tilt
   * @param { number } c - Horizontal Tilt
   * @param { number } d - Vertical Zoom
   * @param { number } e - Horizontal movement
   * @param { number } f - Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  /**
   * Increases the translation effect of the X and Y axes
   *
   * @param { number } x - Horizontal movement distance
   * @param { number } y - Vertical travel distance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Increases the translation effect of the X and Y axes
   *
   * @param { number } x - Horizontal movement distance
   * @param { number } y - Vertical travel distance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Increases the translation effect of the X and Y axes
   *
   * @param { number } x - Horizontal movement distance
   * @param { number } y - Vertical travel distance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Increases the translation effect of the X and Y axes
   *
   * @param { number } x - Horizontal movement distance
   * @param { number } y - Vertical travel distance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  translate(x: number, y: number): void;
  /**
   * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
   *
   * @param { PixelMap } value - PixelMap object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
   *
   * @param { PixelMap } value - PixelMap object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set a PixelMap to the current context. The drawing content is synchronized to the PixelMap.
   *
   * @param { PixelMap } value - PixelMap object
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setPixelMap(value?: PixelMap): void;
  /**
   * transfer ImageBitmap to content.
   *
   * @param { ImageBitmap } bitmap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * transfer ImageBitmap to content.
   *
   * @param { ImageBitmap } bitmap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * transfer ImageBitmap to content.
   *
   * @param { ImageBitmap } bitmap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * transfer ImageBitmap to content.
   *
   * @param { ImageBitmap } bitmap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;
}

declare class CanvasRenderingContext2DNew extends CanvasRenderingContext2DNew {
  /**
   * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * The default value is 0, which is bound to the height of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  readonly height: number;
  /**
   * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * The default value is 0, which is bound to the width of the specified canvas. The value is read-only.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  readonly width: number;
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } type - Image format. The default value is image/png.
   * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
   *    If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } type - Image format. The default value is image/png.
   * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
   *    If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } type - Image format. The default value is image/png.
   * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
   *    If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Generate a character string in the data url format.
   *
   * @param { string } type - Image format. The default value is image/png.
   * @param { any } quality - If the image format is image/jpeg or image/webp, you can select the image quality from 0 to 1.
   *    If the value is out of the range, the default value 0.92 is used.
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  toDataURL(type?: string, quality?: any): string;
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  /**
   * Constructor of the canvas drawing context object, which is used to create a drawing context object.
   *
   * @param { RenderingContextSettings } settings - Drawing attribute. For details, see {@link RenderingContextSettings}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @form
   */
  constructor(settings?: RenderingContextSettings);
}
