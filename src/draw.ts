import { marked } from "marked";
import { Rules } from './rule'


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
        } else if (content.type === "paragraph") {
            console.log(content.tokens)
            content.tokens.forEach((token) => {
                this.draw(ctx, token)
            })
        } else {
            //@ts-ignore
            ctx.fillText(content.text, this.set[0], this.set[1] + typeStyle.marginTop)
        }
        this.set[1] = this.set[1] + typeStyle.fontSize + typeStyle.marginBottom
    }
}