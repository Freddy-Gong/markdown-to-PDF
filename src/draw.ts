import { marked } from "marked";
import { Rules } from './rule'
export const DrawObj = {
    space: (canvas: CanvasRenderingContext2D) => { console.log("space"); return canvas },
    code: (canvas: CanvasRenderingContext2D) => { console.log("code"); return canvas },
    heading: (canvas: CanvasRenderingContext2D, depth: number) => { console.log("heading", depth); return canvas },
    table: (canvas: CanvasRenderingContext2D) => { console.log("table"); return canvas },
    hr: (canvas: CanvasRenderingContext2D) => { console.log("hr"); return canvas },
    blockquote: (canvas: CanvasRenderingContext2D) => { console.log("blockquote"); return canvas },
    list: (canvas: CanvasRenderingContext2D) => { console.log("list"); return canvas },
    list_item: (canvas: CanvasRenderingContext2D) => { console.log("list_item"); return canvas },
    paragraph: (canvas: CanvasRenderingContext2D) => { console.log("paragraph"); return canvas },
    html: (canvas: CanvasRenderingContext2D) => { console.log("html"); return canvas },
    text: (canvas: CanvasRenderingContext2D) => { console.log("text"); return canvas },
    def: (canvas: CanvasRenderingContext2D) => { console.log("def"); return canvas },
    escape: (canvas: CanvasRenderingContext2D) => { console.log("escape"); return canvas },
    image: (canvas: CanvasRenderingContext2D) => { console.log("image"); return canvas },
    link: (canvas: CanvasRenderingContext2D) => { console.log("link"); return canvas },
    strong: (canvas: CanvasRenderingContext2D) => { console.log("strong"); return canvas },
    em: (canvas: CanvasRenderingContext2D) => { console.log("em"); return canvas },
    codespan: (canvas: CanvasRenderingContext2D) => { console.log("codespan"); return canvas },
    br: (canvas: CanvasRenderingContext2D) => { console.log("br"); return canvas },
    del: (canvas: CanvasRenderingContext2D) => { console.log("del"); return canvas },
}

const offset = {
    xoffset: 20,
    yoffset: 20
}

const fontSize = "19px serif"

export class Pointer {
    set: Array<number>
    constructor() {
        this.set = [offset.xoffset, offset.yoffset]
    }

    draw(ctx: any, content: marked.Token) {
        //@ts-ignore
        const typeStyle = content.type === "heading" ? Rules.heading[content.depth] : Rules[content.type]
        ctx.fillStyle = "black"
        ctx.font = typeStyle.fontSize + "px serif"
        if (content.type === "space") {
            ctx.fillText(content.raw, this.set[0], this.set[1] + typeStyle.marginTop)
        } else {
            //@ts-ignore
            ctx.fillText(content.text, this.set[0], this.set[1] + typeStyle.marginTop)
        }
        this.set[1] = this.set[1] + typeStyle.fontSize + typeStyle.marginBottom
    }
}