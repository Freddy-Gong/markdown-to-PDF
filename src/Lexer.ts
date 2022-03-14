export class Lexer {
    tokens: Array<string>
    inlineQueue: Array<string>
    constructor() {
        this.tokens = []
        this.inlineQueue = []
    }
    static lex(src: string) {
        const lexer = new Lexer();
        return lexer.lex(src);
    }

    lex(src: string) {
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ');

        this.blockTokens(src, this.tokens);

        let next;
        while (next = this.inlineQueue.shift()) {
            this.inlineTokens(next.src, next.tokens);
        }
        return this.tokens;
    }

    blockTokens(src: string, tokens: Array<string>) {

    }

    inlineTokens(src: string, tokens: []) {

    }
}