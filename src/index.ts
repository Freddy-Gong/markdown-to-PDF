import path from 'path'
import fs from 'fs'
import { marked } from 'marked'

const absolutePath = path.resolve(__dirname, '../test/test.md')
console.log(absolutePath)
const fileContent = fs.readFileSync(absolutePath, "utf-8")
console.log(fileContent)
const htmlContent = marked.parse(fileContent)
console.log(htmlContent)
HTMLElement
// const canvas = document.createElement("canvas")
// console.log(canvas)
