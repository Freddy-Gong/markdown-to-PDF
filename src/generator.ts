import path from 'path'
import fs from 'fs'
import { Canvas } from 'canvas'
// 饼图需要自定义的参数

// 饼图 方法定义
function pie() {
    var canvas = new Canvas(1240, 1754);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, 1240, 1754)
    ctx.font = '48px serif';
    ctx.strokeText("Hello world", 10, 50)

    console.log(canvas.toDataURL());//生成图片base64
    canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'pie.png'))) // 生成本地图片(指定文件名)
}
pie();