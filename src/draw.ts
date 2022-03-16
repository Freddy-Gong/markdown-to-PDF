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

    draw(ctx: any, content: marked.Token, last: any) {
        //@ts-ignore
        const typeStyle = content.type === "heading" ? Rules.heading[content.depth] : Rules[content.type]
        //margin合并问题
        if (last.marginBottom !== undefined) {
            if (typeStyle.marginTop > last.marginBottom) {
                this.set[1] = this.set[1] + typeStyle.marginTop - last.marginBottom
            } else {
                this.set[1] = this.set[1] + last.marginTop - typeStyle.marginBottom

            }
        } else {
            this.set[1] += typeStyle.marginTop
        }
        console.log(this.set, typeStyle, last)
        ctx.fillStyle = "black"
        ctx.font = typeStyle.fontSize + "px serif"
        if (content.type === "space") {
            ctx.fillText(content.raw, this.set[0], this.set[1])
        } else if (content.type === "paragraph") {
            let lastType = Rules.paragraph
            content.tokens.forEach((token) => {
                this.draw(ctx, token, lastType)
                lastType = Rules[token.type] as any
            })
        } else {
            //@ts-ignore
            ctx.fillText(content.text, this.set[0], this.set[1])
        }
        this.set[1] = this.set[1] + typeStyle.fontSize + typeStyle.marginBottom
    }
}