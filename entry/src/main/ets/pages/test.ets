import { EraserBrush } from '@ohos/eraser'
import * as fabric from '@ohos/fabric'
import { TOptions, RectProps, CircleProps, TestInterface, Control } from '@ohos/fabric'
interface TTextUnderline {
  underline: boolean
}
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
  private image: ImageBitmap = new ImageBitmap('pages/images/printio.png')
  private scaleImage: ImageBitmap = new ImageBitmap('pages/images/scale.png')
  private deleteImage: ImageBitmap = new ImageBitmap('pages/images/delete.png')
  private animateImage: ImageBitmap = new ImageBitmap('pages/images/ladybug.png')
  build() {
    Row() {
      Column() {
        Canvas(this.context)
          .onReady(() => {
            const canvas = new fabric.Canvas(this.context, this.canvasWidth, this.canvasHeight, { offsetWidth: 0, offsetHeight: 0 })
            if (this.isDrawingMode) {
              canvas.isDrawingMode = this.isDrawingMode
              const eraser = new fabric.PencilBrush(canvas)
              // const eraser = new EraserBrush(canvas)
              eraser.width = 20
              eraser.color = 'white'
              canvas.freeDrawingBrush = eraser
            }
            // basic shape
            const rectConfig: TOptions<RectProps> = { width: 80, height: 60, left: 250, top: 300, fill: '#f55', strokeWidth: 0 }
            const rect = new fabric.Rect(rectConfig)
            const circleConfig: TOptions<CircleProps> = { radius: 30, left: 50, top: 50, fill: 'rgb(50, 205, 50)', strokeWidth: 0 }
            const circle = new fabric.Circle(circleConfig)
            const triangleConfig: TOptions<RectProps> = { width: 80, height: 80, left: 150, top: 130, fill: '#55f', strokeWidth: 0 }
            const triangle = new fabric.Triangle(triangleConfig)
            canvas.add(rect, circle, triangle)
            for (let i = 0; i < 100; i++) {
              rectConfig.top = rectConfig.top + 10
              rectConfig.left = rectConfig.left + 10
              const newRect = new fabric.Rect(rectConfig)
              canvas.add(newRect)
            }
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
              // todo
              // how to get image width and height?
              // why ImageBitmap.width return 0?
              width: 200,
              height: 200,
              top: 250,
              rotate: 40,
              left: 40
            }
            const imageInstance = new fabric.FabricImage(this.image, imageConfig)
            canvas.add(imageInstance)

            // custom path
            const path: TestInterface = {"type":"path","originX":"center","originY":"center","left":200,"top":420,"width":232,"height":49,"fill":null,"overlayFill":null,"stroke":"#aaf","strokeWidth":10,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":true,"transparentCorners":true,"TargetFind":false,"shadow":{"color":"#aaf","blur":0,"offsetX":0,"offsetY":0},"visible":true,"path":[["M",0,42],["Q",0,42,0,42],["Q",0,42,0.5,42],["Q",1,42,1,41.5],["Q",1,41,3,39],["Q",5,37,10.5,31],["Q",16,25,24.5,18],["Q",33,11,37,8],["Q",41,5,45.5,2.5],["Q",50,0,52.5,0],["Q",55,0,57,0],["Q",59,0,60,3],["Q",61,6,64,19.5],["Q",67,33,68,37],["Q",69,41,69.5,44],["Q",70,47,71.5,48],["Q",73,49,76,49],["Q",79,49,85.5,44],["Q",92,39,100.5,33],["Q",109,27,113.5,23],["Q",118,19,125.5,16],["Q",133,13,139.5,13.5],["Q",146,14,149,17.5],["Q",152,21,153.5,24],["Q",155,27,156.5,29.5],["Q",158,32,160.5,32.5],["Q",163,33,166,32],["Q",169,31,172,27.5],["Q",175,24,179,20.5],["Q",183,17,185.5,14.5],["Q",188,12,189.5,12],["Q",191,12,192.5,12],["Q",194,12,195.5,15],["Q",197,18,199,19.5],["Q",201,21,203,22.5],["Q",205,24,207.5,24],["Q",210,24,214.5,23.5],["Q",219,23,222.5,20.5],["Q",226,18,229,15.5],["L",232,13]],"pathOffset":{"x":116,"y":24.5}};
            fabric.Path.fromObject(path).then((pathInstance) => {
              console.log(JSON.stringify(pathInstance))
              pathInstance.clone()
                .then(clone => {
                  clone.stroke = 'red'
                  clone.top = pathInstance.top + 50
                  canvas.add(clone)
                })
              canvas.add(pathInstance)
            })

            // animation png
            const animateImageConfig: TOptions<fabric.FabricImage> = {
              width: 40,
              height: 40
            }
            const animateInstance = new fabric.FabricImage(this.animateImage, animateImageConfig)

            // 设置图片位置 缩放 透明度 旋转角度
            animateInstance.set({
              left: 50,
              top: 540,
              angle: 10,
              opacity: 0.1
            })
              .scale(2);
            canvas.add(animateInstance)


            let isStart = true;
            console.log(JSON.stringify(isStart))

            animateInstance.animate({
              'left': isStart ? 300 : 50,
              opacity: isStart ? 1 : 0.1,
              angle: isStart ? 100 : 10,
            }, {
              duration: 1500,
              // todo
              // do not support bind ?
              onChange: canvas.requestRenderAll.bind(canvas),
              onComplete: () => {
                isStart = !isStart
                console.log('onComplete')
              }
            });

            // text rendering
            const styleU: TTextUnderline = {
              underline: true
            };
            const textConfig: TOptions<fabric.FabricText> = {
              // todo
              // internal bug
              // need to set line-height
              lineHeight: 0.5,
              width: 300,
              fontSize: 36,
              fontFamily: 'Helvetica',
              fill: 'white',
              backgroundColor: 'black',
              styles: {
                0: {
                  21: styleU,
                  22: styleU,
                  23: styleU,
                  24: styleU,
                  25: styleU,
                  26: styleU,
                  27: styleU,
                  28: styleU,
                },
                1: {

                },
              },
              left: 20,
              top: 20,
              textAlign: 'center',
              borderColor: '#19BCAA',
              borderScaleFactor: 2,
              cornerSize: 24,
              controlsAboveOverlay: true,
              borderOpacityWhenMoving: 1,
              editable: true,
              editingBorderColor: '#19BCAA',
              hoverCursor: 'default'
            }
            const text:string = "This lib is free for everyone.\nSome things are not.\nPeople behind FabricJS acknowledge that Black people have to fight for basic rights, against systemic racism, unequal opportunities and injustice across the 🌎.\nWe know this is wrong and we are 💔. 💪🏽💪🏾💪🏿!"
            const supportText = new fabric.Textbox(text, this.context, textConfig)
            canvas.add(supportText)
            supportText.setControlsVisibility({
              tr: false,
              bl: false,
              ml: false,
              mb: false,
              mr: false,
              mt: false
            })
            const deleteControlConfig: TOptions<Control> = {
              x: -0.5,
              y: -0.5,
              cursorStyle: 'default',
              mouseUpHandler: (eventData, transform) => {
                canvas.remove(transform.target)
              },
              render: (ctx, left, top, styleOveride, fabricObject) => {
                const size = 24;
                ctx.save();
                ctx.translate(left, top);
                ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
                ctx.drawImage(this.deleteImage, -size / 2, -size / 2, size, size);
                ctx.restore();
              }
            }
            const scaleControlConfig: TOptions<Control> ={
              x: 0.5,
              y: 0.5,
              cursorStyle: 'default',
              actionHandler: fabric.controlsUtils.scalingEqually,
              render: (ctx, left, top, styleOveride, fabricObject) => {
                const size = 24;
                ctx.save();
                ctx.translate(left, top);
                ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
                ctx.drawImage(this.scaleImage, -size / 2, -size / 2, size, size);
                ctx.restore();
              }
            }
            console.log(JSON.stringify(Object.keys(rectWithStroke.controls)))
            rect.setControlsVisibility({
              tr: false,
              tl: true,
              bl: false,
              br: true,
              ml: false,
              mb: false,
              mr: false,
              mt: false,
              mtr: false
            })
            rect.controls.tl = new fabric.Control(deleteControlConfig)
            rect.controls.br = new fabric.Control(scaleControlConfig)
            // custom text
            const text1Config: TOptions<fabric.FabricText> = {
              left: 90,
              lineHeight: 0.5,
              top: 570,
              angle: -5,
              fontFamily: 'Helvetica',
              strokeWidth:0,
              fontSize: 20,
              fill: 'red'
            }
            const text1 = new fabric.FabricText('Fabric', this.context, text1Config);
            const text2Config: TOptions<fabric.FabricText> = {
              lineHeight: 0.5,
              fontSize: 60,
              left: 170,
              top: 560,
              fontFamily: 'Impact',
              fill: '#eee',
              strokeWidth: 2,
              stroke: 'red'
            }
            const text2 = new fabric.FabricText('has', this.context, text2Config);
            const text3Config: TOptions<fabric.FabricText> = {
              lineHeight: 0.5,
              left: 140,
              top: 615,
              angle: -5,
              fontFamily: 'Georgia',
              strokeWidth:0,
              fontSize: 20,
              fontWeight: 'bold',
              fill: 'green',
              textBackgroundColor: '#efe'
            }
            const text3 = new fabric.FabricText('multiline text', this.context, text3Config);
            const text4Config: TOptions<fabric.FabricText> = {
              lineHeight: 0.5,
              left: 140,
              top: 660,
              angle: -5,
              fontFamily: 'Courier',
              fontSize: 18,
              underline: true,
              strokeWidth:0,
              fill: 'blue',
              textAlign: 'center'
            }
            const text4 = new fabric.FabricText('with extensive \ndecoration support',this.context,  text4Config);
            const text5Config: TOptions<fabric.FabricText> = {
              lineHeight: 0.5,
              left: 140,
              top: 730,
              angle: 5,
              fontFamily: 'Arial',
              fontStyle: 'italic',
              fontSize: 20,
              strokeWidth:0,
              fill: 'grey',
              textAlign: 'right',
            }
            const text5 = new fabric.FabricText('and\neven\nalignment', this.context, text5Config);
            canvas.add(text1, text2, text3, text4, text5);

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