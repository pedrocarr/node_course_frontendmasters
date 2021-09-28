import { readFile } from 'fs/promises'

const template = await readFile(path.join(__dirname, 'template.html'))