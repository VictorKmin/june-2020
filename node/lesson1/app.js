// const { rrr, createUser, var22, testMyName } = require('./dir/file2');
//
// global.xxx = 'REACT';
//
// let dimas = createUser('Dima', 22);
//
// console.log(dimas);
//
//
// console.log('********************************************************')
// console.log(__dirname)
// console.log(__filename)
// console.log(global.framework)
// console.log('********************************************************');
//
//
// process.env.SECURE_KEY = 'SECRET !!!'
//
//
// console.log(process.env.SECURE_KEY);
//
//
// // global.appRoot = __dirname;


// FILE SYSTEM

const fs = require('fs');
const path = require('path');

let filePath = path.join(process.cwd(), 'dir', 'myFile.txt');
let filePathNew = path.join(process.cwd(), 'dir', 'photos', 'photo.txt')


// fs.writeFile(filePath, 'HELLO CHAT', err => {
//   if (err) {
//     console.log(err);
//   }
// });
//
// fs.appendFile(filePath, `I AM HERE \n ME TOO !`, err => {
//   console.log(err);
// });
//
//
// fs.mkdir(path.join(__dirname, 'zoom', 'video', '23.11.2020'), {recursive: true}, err => {
//   console.log(err);
// });

//
// fs.rmdir(path.join(__dirname, 'zoom'), {recursive: true}, (err) => {
//   console.log(err);
// })


// fs.readdir(path.join(process.cwd(), 'dir'), ((err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     files.forEach(file => {
//       fs.stat(path.join(process.cwd(), 'dir', file), (err1, stats) => {
//         console.log(stats);
//         console.log('__________________________________________________');
//       })
//     })
//   }
// }));
//
//
// fs.unlink(filePath, err => {
//   console.log(err);
// });
//
//
// fs.rename(filePath, filePathNew, err => {
//   console.log(err);
// })


// for (let i = 0; i < 10000; i++) {
//   fs.appendFile(filePath, `I AM HERE \n ME TOO !\n`, err => {
//     console.log(err);
//   });
// }
//
//
// fs.readFile(filePath, (err, data) => {
//   console.log(data.toString());
// })


const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(filePathNew);

// readStream.on('data', (chunk) => {
//   console.log(chunk);
//   console.log('************************************************************');
//   writeStream.write(chunk)
// });




console.time('WHILE !')

let i = 0;
while (i < 9999) {
  console.log('x');
  i++
}

console.time('STREAM')

readStream.pipe(writeStream);

console.timeEnd('STREAM')

console.timeEnd('WHILE !')
