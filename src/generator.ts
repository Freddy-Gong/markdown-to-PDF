import { Canvas, CanvasRenderingContext2D } from 'canvas'
import path from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { DrawObj } from './draw'


export function GenCanvas(tokens: marked.TokensList) {
    let canvas = new Canvas(1240, 1754);
    let ctx = canvas.getContext('2d');
    while (tokens.length) {
        const type = tokens[0].type
        if (type === "heading") {
            DrawObj[type](ctx, tokens[0].depth)
        } else {
            DrawObj[type](ctx)
        }
        tokens.shift()
    }
    return canvas
}

const absolutePath = path.resolve(__dirname, '../test/test.md')
const fileContent = fs.readFileSync(absolutePath, "utf-8")
// 饼图 方法定义
function test(tokens: marked.TokensList) {
    var canvas = new Canvas(1240, 1754);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, 1240, 1754)
    ctx.fillStyle = "black"
    ctx.font = '19px serif';
    ctx.fillText(fileContent, 10, 50)

    console.log(canvas.toDataURL());//生成图片base64
    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'pie.png'))) // 生成本地图片(指定文件名)
}