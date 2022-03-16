import { Canvas } from 'canvas'
import { marked } from 'marked'
import { Pointer } from './draw'
import { Rules } from './rule'
import { jsPDF } from "jspdf";

export function GenCanvas(tokens: marked.TokensList) {
    let canvas = new Canvas(1240, 1754);
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, 1240, 1754)//白色背景
    const pointer = new Pointer()
    let lastType = {}
    let last: marked.Token
    while (tokens.length) {
        pointer.draw(ctx, tokens[0], lastType)
        //@ts-ignore
        last = tokens.shift()
        if (last.type === "heading") {
            lastType = Rules[last.type][last.depth]
        } else {
            lastType = Rules[last.type]
        }
    }
    //console.log(canvas.toDataURL());//生成图片base64
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF();

    pdf.addImage(imgData, 'JPEG', 0, 0, 1240, 1754);
    pdf.save("./src/test.pdf");
}

