import {readFile} from 'fs/promises'

try{
    const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
} catch (e) {
    throw e
    console.log('hello')
}