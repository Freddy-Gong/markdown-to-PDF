import { Canvas } from 'canvas'
import path from 'path'
import fs from 'fs'

function generatorCnavas(markdownContent: string) {

}

const absolutePath = path.resolve(__dirname, '../test/test.md')
const fileContent = fs.readFileSync(absolutePath, "utf-8")
// 饼图 方法定义
export function GenCanvas(tokens: Array<string>) {
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