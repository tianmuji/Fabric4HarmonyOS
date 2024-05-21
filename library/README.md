# Fabric.js for HarmonyOS

## 简介

[Fabric.js](https://github.com/fabricjs/fabric.js) ，是一个基于 canvas 的图形库，可以运行 node.js 和浏览器中。本库基于[Fabric.js](https://github.com/fabricjs/fabric.js) 原库最新版本进行适配，使其可以运行在 OpenHarmony，并沿用其现有用法和特性。
该库会和fabric保持同步版本更新

- 使用面向对象的方式操作canvas
- 提供canvas交互api
- 支持擦除

## 下载安装

```javascript
ohpm install fabric
```

## 使用示例

```javascript
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
  private effectSettings: RenderingContextSettings = new RenderingContextSettings(true)
  private effectContext: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.effectSettings)
  private fabricInstance: fabric.Canvas = new fabric.Canvas(this.context, 400, 400, { offsetWidth: 0, offsetHeight: 0 })
  private isDrawingMode = false
  private canvasWidth: number = 400
  private canvasHeight: number = 500
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
            setTimeout(() => {
              if (this.isDrawingMode) {
                canvas.isDrawingMode = this.isDrawingMode
                // const eraser = new fabric.PencilBrush(canvas)
                const eraser = new fabric.EraserBrush(canvas, this.effectContext)
                eraser.width = 20
                eraser.color = 'white'
                canvas.freeDrawingBrush = eraser
              }
            }, 1000)
            // basic shape
            const rectConfig: TOptions<RectProps> = { width: 50, height: 50, left: 250, top: 300, fill: '#f55', strokeWidth: 0 }
            const rect = new fabric.Rect(rectConfig)
            const circleConfig: TOptions<CircleProps> = { radius: 30, left: 50, top: 50, fill: 'rgb(50, 205, 50)', strokeWidth: 0 }
            const circle = new fabric.Circle(circleConfig)
            const triangleConfig: TOptions<RectProps> = { width: 80, height: 80, left: 150, top: 130, fill: '#55f', strokeWidth: 0 }
            const triangle = new fabric.Triangle(triangleConfig)
            canvas.add(rect, circle, triangle)
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
              left: 40,
              erasable: false
            }
            const imageInstance = new fabric.FabricImage(this.image, imageConfig)
            canvas.add(imageInstance)

            // custom path
            const path: TestInterface = {"type":"path","originX":"center","originY":"center","left":200,"top":420,"width":232,"height":49,"fill":null,"overlayFill":null,"stroke":"#aaf","strokeWidth":10,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":true,"transparentCorners":true,"TargetFind":false,"shadow":{"color":"#aaf","blur":0,"offsetX":0,"offsetY":0},"visible":true,"path":[["M",0,42],["Q",0,42,0,42],["Q",0,42,0.5,42],["Q",1,42,1,41.5],["Q",1,41,3,39],["Q",5,37,10.5,31],["Q",16,25,24.5,18],["Q",33,11,37,8],["Q",41,5,45.5,2.5],["Q",50,0,52.5,0],["Q",55,0,57,0],["Q",59,0,60,3],["Q",61,6,64,19.5],["Q",67,33,68,37],["Q",69,41,69.5,44],["Q",70,47,71.5,48],["Q",73,49,76,49],["Q",79,49,85.5,44],["Q",92,39,100.5,33],["Q",109,27,113.5,23],["Q",118,19,125.5,16],["Q",133,13,139.5,13.5],["Q",146,14,149,17.5],["Q",152,21,153.5,24],["Q",155,27,156.5,29.5],["Q",158,32,160.5,32.5],["Q",163,33,166,32],["Q",169,31,172,27.5],["Q",175,24,179,20.5],["Q",183,17,185.5,14.5],["Q",188,12,189.5,12],["Q",191,12,192.5,12],["Q",194,12,195.5,15],["Q",197,18,199,19.5],["Q",201,21,203,22.5],["Q",205,24,207.5,24],["Q",210,24,214.5,23.5],["Q",219,23,222.5,20.5],["Q",226,18,229,15.5],["L",232,13]],"pathOffset":{"x":116,"y":24.5}};
            fabric.Path.fromObject(path).then((pathInstance) => {
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


            let isStart = true;

            // text rendering
            const styleU: TTextUnderline = {
              underline: true
            };
            const textConfig: TOptions<fabric.FabricText> = {
              // todo
              // internal bug
              // need to set line-height
              erasable: false,
              width: 200,
              fontSize: 30,
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
              cornerSize: 24,
            }
            const text:string = "This lib is free for everyone.\nSome things are not.\nPeople behind FabricJS acknowledge that Black people have to fight for basic rights, against systemic racism, unequal opportunities and injustice across the .\nWe know this is wrong and we are sad!"
            const supportText = new fabric.Textbox(text, this.context, textConfig)
            const ctx = this.context
            const test = ctx.measureText('free for everyone')
            console.log('fasdfsdf', JSON.stringify(test))
            canvas.add(supportText)
            console.log('this.context.font', this.context.font)
            supportText.setControlsVisibility({
              tr: false,
              bl: false,
              ml: false,
              mb: false,
              mr: false,
              mt: false
            })
            supportText.set('lineHeight', supportText.lineHeight / 2)
            console.log('supportText', JSON.stringify(supportText))
            const deleteControlConfig: TOptions<Control> = {
              x: -0.5,
              y: 0.5,
              cursorStyle: 'default',
              mouseUpHandler: (eventData, transform) => {
                canvas.remove(transform.target)
              },
              actionHandler: fabric.controlsUtils.scalingEqually,
              render: (ctx, left, top, styleOveride, fabricObject) => {
                const size = 20;
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
          .backgroundColor('#F5DC62')
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
              const ctx = this.upperContext
              ctx.beginPath()
              ctx.font = "40px";
              const test = ctx.measureText('This lib is free for everyone')
              console.log('test', JSON.stringify(test))
              ctx.fillText("This lib is free for everyone", 10, 50);
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
```

all main features are migrated, the following is not supported yet


the following content is from origin project README.MD


<a href="http://fabricjs.com/kitchensink" target="_blank"><img align="right" src="/lib/screenshot.png" style="width:400px"></a>

A **simple and powerful Javascript HTML5 canvas library**.

- [**Website**][website]
- [**GOTCHAS**][gotchas]
- [**Contributing, Developing and More**](CONTRIBUTING.md)

---

<!-- build/coverage status, climate -->

[![🩺](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)
[![🧪](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)
[![CodeQL](../../actions/workflows/codeql-analysis.yml/badge.svg)](../../actions/workflows/codeql-analysis.yml)

---

<!-- npm, bower, CDNJS versions, downloads -->

[![cdnjs](https://img.shields.io/cdnjs/v/fabric.js.svg)][cdnjs]
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fabric/badge)][jsdelivr]
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/fabricjs/fabric.js)

[![NPM](https://badge.fury.io/js/fabric.svg)](http://badge.fury.io/js/fabric)
[![Downloads per month](https://img.shields.io/npm/dm/fabric.svg)](https://www.npmjs.org/package/fabric)
[![Bower](https://badge.fury.io/bo/fabric.svg)](http://badge.fury.io/bo/fabric)

---

[![Sponsor asturur](https://img.shields.io/static/v1?label=Sponsor%20asturur&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/asturur)
[![Sponsor melchiar](https://img.shields.io/static/v1?label=Sponsor%20melchiar&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/melchiar)
[![Sponsor ShaMan123](https://img.shields.io/static/v1?label=Sponsor%20ShaMan123&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/ShaMan123)
[![Patreon](https://img.shields.io/static/v1?label=Patreon&message=%F0%9F%91%8D&logo=Patreon&color=blueviolet)](https://www.patreon.com/fabricJS)

---

## Features

- Out of the box interactions such as scale, move, rotate, skew, group...
- Built in shapes, controls, animations, image filters, gradients, patterns, brushes...
- `JPG`, `PNG`, `JSON` and `SVG` i/o
- [Typed and modular](#migrating-to-v6)
- [Unit tested](CONTRIBUTING.md#%F0%9F%A7%AA%20testing)

#### Supported Browsers/Environments

|   Context   | Supported Version | Notes                           |
| :---------: | :---------------: | ------------------------------- |
|   Firefox   |        ✔️         | modern version (tbd)            |
|   Safari    |        ✔️         | version >= 10.1                 |
|    Opera    |        ✔️         | chromium based                  |
|   Chrome    |        ✔️         | modern version (tbd)            |
|    Edge     |        ✔️         | chromium based                  |
| Edge Legacy |        ❌         |
|    IE11     |        ❌         |
|   Node.js   |        ✔️         | [Node.js installation](#nodejs) |

Fabric.js Does not use transpilation by default, the browser version we support is determined by the level of canvas api we want to use and some js syntax. While JS can be easily transpiled, canvas API can't.

## Migrating to v6

v6 is a **MAJOR** effort including migrating to TS and es6, countless fixes, rewrites and features.\
Currently in beta, refer to [#8299](../../issues/8299) for guidance.

```bash
$ npm install fabric@beta --save
// or
$ yarn add fabric@beta
```

## Installation

```bash
$ npm install fabric --save
// or
$ yarn add fabric
```

#### Browser

[![cdnjs](https://img.shields.io/cdnjs/v/fabric.js.svg)][cdnjs]
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/fabric/badge)][jsdelivr]

See [browser modules][mdn_es6] for using es6 imports in the browser or use a dedicated bundler.

#### Node.js

Fabric.js depends on [node-canvas][node_canvas] for a canvas implementation (`HTMLCanvasElement` replacement) and [jsdom][jsdom] for a `window` implementation on node.
This means that you may encounter `node-canvas` limitations and [bugs][node_canvas_issues].

Follow these [instructions][node_canvas_install] to get `node-canvas` up and running.

## Quick Start

```js
// v6
import { Canvas, Rect } from 'fabric'; // browser
import { StaticCanvas, Rect } from 'fabric/node'; // node

// v5
import { fabric } from 'fabric';
```

<details><summary><b>Plain HTML</b></summary>

```html
<canvas id="canvas" width="300" height="300"></canvas>

<script src="https://cdn.jsdelivr.net/npm/fabric"></script>
<script>
  const canvas = new fabric.Canvas('canvas');
  const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red',
  });
  canvas.add(rect);
</script>
```

</details>

<details><summary><b>ReactJS</b></summary>

```tsx
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6
import { fabric } from 'fabric'; // v5

export const FabricJSCanvas = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const options = { ... };
    const canvas = new fabric.Canvas(canvasEl.current, options);
    // make the fabric.Canvas instance available to your app
    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    }
  }, []);

  return <canvas width="300" height="300" ref={canvasEl}/>;
};

```

</details>

<details><summary><b>Node.js</b></summary>

```js
import http from 'http';
import * as fabric from 'fabric/node'; // v6
import { fabric } from 'fabric'; // v5

const port = 8080;

http
  .createServer((req, res) => {
    const canvas = new fabric.Canvas(null, { width: 100, height: 100 });
    const rect = new fabric.Rect({ width: 20, height: 50, fill: '#ff0000' });
    const text = new fabric.Text('fabric.js', { fill: 'blue', fontSize: 24 });
    canvas.add(rect, text);
    canvas.renderAll();
    if (req.url === '/download') {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Disposition', 'attachment; filename="fabric.png"');
      canvas.createPNGStream().pipe(res);
    } else if (req.url === '/view') {
      canvas.createPNGStream().pipe(res);
    } else {
      const imageData = canvas.toDataURL();
      res.writeHead(200, '', { 'Content-Type': 'text/html' });
      res.write(`<img src="${imageData}" />`);
      res.end();
    }
  })
  .listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Ready on http://localhost:${port}, http://localhost:${port}/view, http://localhost:${port}/download`
    );
  });
```

</details>

See our ready to use [templates](./.codesandbox/templates/).

---

## Other Solutions

| Project                        | Description          | Demo |
| ------------------------------ | -------------------- | :--: |
| [Three.js][three.js]           | 3D graphics          |
| [PixiJS][pixijs]               | WebGL renderer       |
| [Konva][konva]                 | Similar features     |  ❌  |
| [html-to-image][html-to-image] | HTML to image/canvas |

## More Resources

- [Demos on `fabricjs.com`][demos]
- [Fabric.js on `Twitter`][twitter]
- [Fabric.js on `CodeTriage`][code_triage]
- [Fabric.js on `Stack Overflow`][so]
- [Fabric.js on `jsfiddle`][jsfiddles]
- [Fabric.js on `Codepen.io`][codepens]

## Credits [![Patreon](https://img.shields.io/static/v1?label=Patreon&message=%F0%9F%91%8D&logo=Patreon&color=blueviolet)](https://www.patreon.com/fabricJS)

- [kangax][kagnax]
- [asturur][asturur] on [`Twitter`][asturur_twitter]
  [![Sponsor asturur](https://img.shields.io/static/v1?label=Sponsor%20asturur&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/asturur)
- [melchiar][melchiar] [![Sponsor melchiar](https://img.shields.io/static/v1?label=Sponsor%20melchiar&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/melchiar)
- [ShaMan123][shaman123] [![Sponsor ShaMan123](https://img.shields.io/static/v1?label=Sponsor%20ShaMan123&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/ShaMan123)
- Ernest Delgado for the original idea of [manipulating images on canvas](http://www.ernestdelgado.com/archive/canvas/)
- [Maxim "hakunin" Chernyak](http://twitter.com/hakunin) for ideas, and help with various parts of the library throughout its life
- [Sergey Nisnevich](http://nisnya.com) for help with geometry logic
- [Stefan Kienzle](https://twitter.com/kienzle_s) for help with bugs, features, documentation, GitHub issues
- [Shutterstock](http://www.shutterstock.com/jobs) for the time and resources invested in using and improving Fabric.js
- [and all the other contributors][contributors]

[asturur]: https://github.com/asturur
[asturur_twitter]: https://twitter.com/AndreaBogazzi
[cdnjs]: https://cdnjs.com/libraries/fabric.js
[code_triage]: https://www.codetriage.com/kangax/fabric.js
[codepens]: https://codepen.io/tag/fabricjs
[contributors]: https://github.com/fabricjs/fabric.js/graphs/contributors
[demos]: http://fabricjs.com/demos/
[gotchas]: http://fabricjs.com/fabric-gotchas
[html-to-image]: https://github.com/bubkoo/html-to-image
[jsdelivr]: https://www.jsdelivr.com/package/npm/fabric
[jsdom]: https://github.com/jsdom/jsdom
[jsfiddles]: https://jsfiddle.net/user/fabricjs/fiddles/
[kagnax]: https://twitter.com/kangax
[konva]: https://github.com/konvajs/konva
[mdn_es6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[melchiar]: https://github.com/melchiar
[node_canvas]: https://github.com/Automattic/node-canvas
[node_canvas_install]: https://github.com/Automattic/node-canvas#compiling
[node_canvas_issues]: https://github.com/Automattic/node-canvas/issues
[patreon_badge]: https://img.shields.io/static/v1?label=Patreon&message=%F0%9F%91%8D&logo=Patreon&color=blueviolet
[pixijs]: https://github.com/pixijs/pixijs
[shaman123]: https://github.com/ShaMan123
[so]: https://stackoverflow.com/questions/tagged/fabricjs
[three.js]: https://github.com/mrdoob/three.js/
[twitter]: https://twitter.com/fabricjs
[website]: http://fabricjs.com/
