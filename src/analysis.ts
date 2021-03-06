import { GenCanvas } from "./generator"
import { Lexer } from "marked";


export function analysis(src: string) {
    const tokens = Lexer.lex(src)
    console.dir(tokens)
    return GenCanvas(tokens);
}