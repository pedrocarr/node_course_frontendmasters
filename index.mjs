import { readFile } from 'fs/promises'


const template = await readFile(new URL('template.html', import.meta.url))