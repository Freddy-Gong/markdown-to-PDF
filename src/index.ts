import path from 'path'
import fs from 'fs'
import { analysis } from './analysis'

const absolutePath = path.resolve(__dirname, '../test/test.md')
const fileContent = fs.readFileSync(absolutePath, "utf-8")
analysis(fileContent)
