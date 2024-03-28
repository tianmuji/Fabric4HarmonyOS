import * as fabric from '@ohos/fabric'
import { TOptions, RectProps, CircleProps } from '@ohos/fabric'
@Entry
@Component
struct Index {
  private settings: RenderingContextSettings = new RenderingContextSettings(true)
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings)
  private upperSettings: RenderingContextSettings = new RenderingContextSettings(true)
  private upperContext: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.upperSettings)
  private fabricInstance: fabric.Canvas = new fabric.Canvas(this.context, 400, 400, { offsetWidth: 0, offsetHeight: 0 })
  private isDrawingMode = false
  private canvasWidth: number = 400
  private canvasHeight: number = 1000
  private image: ImageBitmap = new ImageBitmap('../pages/images/printio.png')
  build() {
    Row() {
      Column() {
        Canvas(this.context)
          .onReady(() => {
            const canvas = new fabric.Canvas(this.context, this.canvasWidth, this.canvasHeight, { offsetWidth: 0, offsetHeight: 0 })
            if (this.isDrawingMode) {
              canvas.isDrawingMode = this.isDrawingMode
              const eraser = new fabric.PencilBrush(canvas)
              // const eraser = new EraserBrush(canvas, this.effectContext)
              eraser.width = 20
              eraser.color = 'white'
              canvas.freeDrawingBrush = eraser
            }
            // basic shape
            const rectConfig: TOptions<RectProps> = { width: 80, height: 60, left: 100, top: 100, fill: '#f55', strokeWidth: 0 }
            const rect = new fabric.Rect(rectConfig)
            const circleConfig: TOptions<CircleProps> = { radius: 30, left: 50, top: 50, fill: 'rgb(50, 205, 50)', strokeWidth: 0 }
            const circle = new fabric.Circle(circleConfig)
            const triangleConfig: TOptions<RectProps> = { width: 80, height: 80, left: 150, top: 130, fill: '#55f', strokeWidth: 0 }
            const triangle = new fabric.Triangle(triangleConfig)
            canvas.add(rect, circle, triangle)

            // basic shape with stroke
            const rectConfigWithStroke: TOptions<RectProps> = { width: 80, height: 60, left: 110, top: 110, fill: '#f55', strokeWidth: 1, stroke: 'black' }
            const rectWithStroke = new fabric.Rect(rectConfigWithStroke)
            const circleConfigWithStroke: TOptions<CircleProps> = { radius: 30, left: 60, top: 60, fill: 'rgb(50, 205, 50)', strokeWidth: 1, stroke: 'black' }
            const circleWithStroke = new fabric.Circle(circleConfigWithStroke)
            const triangleConfigWithStroke: TOptions<RectProps> = { width: 80, height: 80, left: 160, top: 140, fill: '#55f', strokeWidth: 1, stroke: 'black' }
            const triangleWithStroke = new fabric.Triangle(triangleConfigWithStroke)
            canvas.add(rectWithStroke, circleWithStroke, triangleWithStroke)

            // local image
            const imageConfig: TOptions<fabric.ImageProps> = {
              width: 100,
              height: 100,
              top: 30,
              left: 40
            }
            const imageInstance = new fabric.FabricImage(this.image, imageConfig)
            setTimeout(() => {
              canvas.add(imageInstance)
            })
            this.fabricInstance = canvas
          })
          .width(this.canvasWidth)
          .height(this.canvasHeight)
        Canvas(this.upperContext)
          .width(this.canvasWidth)
          .height(this.canvasHeight)
          .position({x: 0, y: 0})
          .onReady(() => {
            if (this.fabricInstance) {
              this.fabricInstance.setUpper(this.upperContext)
            } else {
              setTimeout(() => {
                this.fabricInstance.setUpper(this.upperContext)
              }, 1000)
            }
            setTimeout(() => {
              this.fabricInstance.setUpper(this.upperContext)
            }, 1000)
          })
          // .onClick((e: ClickEvent) => {
          //   this.fabricInstance.handleMouseDown(e)
          //   // todo
          //   // mousedown 之后一定是 mouseup?
          //   this.fabricInstance.handleMouseUp(e)
          // })
          .onTouch((event: TouchEvent) => {
            if (event.type === TouchType.Down) {
              this.fabricInstance.handleMouseDown(event)
            } else if (event.type === TouchType.Move) {
              this.fabricInstance.handleMouseMove(event)
            } else if (event.type === TouchType.Up) {
              this.fabricInstance.handleMouseUp(event)
            }
          })
      }
    }
    .width(this.canvasWidth)
    .height(this.canvasHeight)
  }
}