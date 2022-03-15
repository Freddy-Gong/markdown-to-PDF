import { Canvas } from 'canvas'
import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { DrawObj, Pointer } from './draw'


export function GenCanvas(tokens: marked.TokensList) {
    let canvas = new Canvas(1240, 1754);
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, 1240, 1754)//白色背景
    const pointer = new Pointer()
    while (tokens.length) {
        pointer.draw(ctx, tokens[0].raw)
        // const type = tokens[0].type
        // if (type === "heading") {
        //     DrawObj[type](ctx, tokens[0].depth)
        // } else {
        //     DrawObj[type](ctx)
        // }
        tokens.shift()
    }
    console.log(canvas.toDataURL());//生成图片base64
    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'test.png'))) // 生成本地图片(指定文件名)
}

