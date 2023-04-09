import * as fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const date = new Date();

const dateString = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// const fileWrite = fs.createWriteStream( __dirname + '/teste.txt');
const fileRead = fs.createReadStream('teste-nodejs/teste1.txt');

fileRead.on('data', (chunk)=>{
    console.log('iddo')
    console.log(chunk.toString())
})

fileRead.on('end', ()=>{
    fileRead.close();

})
// fileWrite.close();



// fs.writeFile('teste.txt', `Um texto qualquer feito as ${dateString}`, {flag: 'a+'}, (err)=>{
//     console.log(err);
// });
    
// file.write('\nUm texto qualquer escrito as: ' + dateString, (err)=>{
//     console.log(err);
//     if(!err){
//         console.log('sucesso')
//     }
// });