import path from 'path'
import fs from 'fs'

const absolutePath = path.resolve(__dirname, '../test/test.md')
const fileContent = fs.readFileSync(absolutePath, "utf-8")
for (let i = 0; i < fileContent.length; i++) {
    console.log(fileContent[i])
    if (fileContent[i] === "\n") {
        console.log("回车")
    }
    if (fileContent[i] === " ") {
        console.log("空格")
    }
}

