import * as fabric from './fabric'
import { TPointerEvent } from './fabric'
@Component
export struct FabricCanvas {
  private settings: RenderingContextSettings = new RenderingContextSettings(true)
  context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings)

  private upperSettings: RenderingContextSettings = new RenderingContextSettings(true)
  upperContext: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.upperSettings)
  fabricInstance: fabric.Canvas
  private img:ImageBitmap = new ImageBitmap('pages/ladybug.png')
  private isDrawingMode = false

  build() {
    Row() {
      Column() {
        Canvas(this.context)
          .onReady(() => {
            const canvas = new fabric.Canvas(this.context, 400, 400, { offsetWidth: 0, offsetHeight: 0 })
            this.fabricInstance = canvas
            if (this.isDrawingMode) {
              canvas.isDrawingMode = true
              canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
            }
            const rect = new fabric.Rect({ width: 80, height: 60, left: 110, top: 110, fill: '#f55', strokeWidth: 0, transparentCorners: false, originX: 'center', originY: 'center' })
            const circle = new fabric.Circle({ radius: 30, left: 50, top: 50, fill: 'rgb(50, 205, 50)', strokeWidth: 0, transparentCorners: false });
            const triangle = new fabric.Triangle({ width: 80, height: 80, left: 150, top: 130, fill: '#55f', strokeWidth: 0,transparentCorners: false  });

            const rect1 = new fabric.Rect({ width: 79, height: 59, left: 190, top: 100, fill: '#f55', strokeWidth: 1, stroke: 'black', transparentCorners: false })
            const circle1 = new fabric.Circle({ radius: 29.5, left: 140, top: 50, fill: 'rgb(50, 205, 50)', strokeWidth: 1, stroke: 'black', transparentCorners: false });
            const triangle1 = new fabric.Triangle({ width: 79, height: 79, left: 240, top: 130, fill: '#55f', strokeWidth: 1, stroke: 'black', transparentCorners: false });
            // canvas.add(triangle1, rect1, circle1)
            var text1 = new fabric.FabricText('FabricJS4HarmonyOS', this.context, {
              left: 0,
              top: 200,
              angle: -5,
              fontFamily: 'Helvetica',
              strokeWidth:0,
              fontSize: 100,
              minWidth: 100,
              minHeight: 100,
              fill: 'red',
              transparentCorners: false
            });
            var text2 = new fabric.Textbox('FabricJS4 HarmonyOS', this.context, {
              top: 0,
              left: 0,
              width: 200,
              fontFamily: 'Helvetica',
              fill: 'red',
              centeredRotation: true,
              transparentCorners: false
            } )
            // canvas.add(text1, text2);
            const image = new fabric.FabricImage(this.img, {
              width: 128 / 3,
              height: 134 / 3,
              top: 300,
              left: 20,
              centeredRotation: true,
              transparentCorners: false
            })
            rect.setCoords()
            rect.centeredRotation = true
            canvas.add(rect)
            var angle = 0;
            const renderAll = canvas.renderAll.bind(canvas)
            function animate () {
              angle += 2;
              if (angle === 360) {
                angle = 0;
              }
              rect.set('angle', angle)
              renderAll()
              fabric.util.requestAnimFrame(animate);
            }
            animate()
            const helper = canvas.toJSON()
            // canvas.loadFromJSON(obj)
            // canvas.renderAll()
            console.log('helper', JSON.stringify(helper))
            // canvas.add(image);
          })
          .width(400)
          .height(400)
        Canvas(this.upperContext)
          .width(400)
          .height(400)
          .position({x: 0, y: 0})
          .onReady(() => {
            if (this.fabricInstance) {
              this.fabricInstance.setUpper(this.upperContext)
            } else {
              setTimeout(() => {
                this.fabricInstance.setUpper(this.upperContext)
              }, 1000)
            }
          })
          .onClick((e: ClickEvent) => {
            this.fabricInstance.handleMouseDown(e)
            // todo
            // mousedown 之后一定是 mouseup?
            this.fabricInstance.handleMouseUp(e)
          })
          .onTouch((event: TouchEvent) => {
            const helper = {
              timestamp: event.timestamp,
              target: event.target,
              source: event.source,
              x: event.changedTouches[0].x,
              y: event.changedTouches[0].y,
              // todo
              // error in card?
              windowX: event.changedTouches[0].screenX,
              windowY: event.changedTouches[0].screenY,
              stopPropagation: event.stopPropagation
            } as unknown as TPointerEvent
            if (event.type === TouchType.Down) {
              this.fabricInstance.handleMouseDown(helper)
            } else if (event.type === TouchType.Move) {
              this.fabricInstance.handleMouseMove(helper)
            } else if (event.type === TouchType.Up) {
              this.fabricInstance.handleMouseUp(helper)
              // todo
              // why handleMouseUp does not call requestRenderAll
              // this.fabricInstance.requestRenderAll()
            }
          })
          .onDragStart(e => {
            console.log('onDragStart', JSON.stringify(e))
          })
          .onDragMove((event: DragEvent) => {
            console.log('onDragMove', JSON.stringify(event))
          })
          .onDrop((event) => {
            console.log('onDrop', JSON.stringify(event))
          })
          .onHover((isHover: boolean) => {})
      }
    }
    .width(400)
    .height(400)
  }
}

export * as fabric from './fabric'
export { IndexTest } from './Test'