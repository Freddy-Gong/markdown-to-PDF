import { GenCanvas } from "./generator"
import { Lexer } from "./Lexer"
export function analysis(src: string) {
    try {
        const tokens = Lexer.lex(src);
        return GenCanvas(tokens);
    } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        throw e;
    }
}