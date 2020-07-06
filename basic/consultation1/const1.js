// let name = 'Vasyl';
// let language = 'JS';
//
// document.write('Hello, my name is ' + name + ' and I am learning ' + language);
// document.write('<br>')
// document.write('<br>')
// document.write('<br>')
// document.write(`Hello my name is ${name} and I am learning ${language}`);
// document.write('<br>')
// document.write('<br>')
// document.write('<br>')
// document.write('Hello my name is ${name} and I am learning ${language}');
//
//
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи


// let arr = ['a', 2, 'b', true, 5, false, 7, 'c', 9, true];
//
// for (let elem of arr) {
//   if (typeof elem === 'string') {
//     console.log(elem);
//   }
// }


// используя Math.random заполнить массив из ???(сколько хотите) элементов.
// // диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = []
// for (let i = 0; i < 100; i++) {
//   let answer = Math.floor(Math.random() * (732 - 8) + 8)
//   arr.push(answer)
// }
// console.log(arr)
//
//
// for (let i = 1; i <= 20; i++) {
//   document.write(`<h1> Кількість піцци на тусу ${i} </h1>`)
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши 2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// for (let hours = 0; hours < 3; hours++) {
//   for (let minutes = 0; minutes < 60; minutes++) {
//
//     if (hours === 2 && minutes === 20) {
//       break;
//     }
//
//     for (let seconds = 0; seconds < 60; seconds++) {
//       console.log(hours + 'год. ' + minutes + 'хв. ' + seconds + 'сек.');
//     }
//   }
// }


// for (let hours = 0; hours < 60; hours++) {
//   for (let minutes = 0; minutes < 60; minutes++) {
//     for (let seconds = 0; seconds < 60; seconds++)
//       if (seconds === 0 && minutes === 20 && hours === 2) {
//         console.log(hours, minutes, seconds)
//       }
//   }
// }
//
//
// console.time('Roksa')
//
//
// for (let h = 0; h < 3; h++) {
//   for (let m = 0; m < 60; m++) {
//     for (let s = 0; s < 60; s++) {
//       console.log(`${h}год ${m}хв ${s}c`);
//
//       if (h === 2 && m === 20 && s === 0) {
//         break;
//       }
//     }
//     if (h === 2 && m === 20) {
//       break;
//     }
//   }
// }
//
// console.timeEnd('Roksa')
//
// // Lilya: 1456.112060546875ms
// // Roksa: 1895.52001953125ms
//
//
// // for (let houre = 0; houre <= 2; houre++) {
// //   for (let min = 0; min < 60; min++) {
// //     for (let sec = 0; sec < 60; sec++) {
// //       console.log(`${houre},${min},${sec}`)
// //     }
// //   }
// // }
//
// console.time('Lilya')
//
// let time = '0 : 0 : 0';
// let min = 0
// let sec = 0
//
// for (let hour = 0; hour <= 2; hour++) {
//   for (min = 0; min < 60; min++) {
//     for (sec = 0; sec < 60; sec++) {
//       if (time === '2 : 20 : 0') {
//         break
//       }
//       time = `${hour} : ${min} : ${sec}`
//       console.log(time);
//     }
//   }
// }
// console.timeEnd('Lilya')


// Вывести каждый елемент массива у которого соседний с права элемент - парный

// let numbers = [5, 8, 3, 6, 9, 1, 6, 8, 7, 5, 2, 7, 13, 86, 54];
//
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i + 1] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }


// вивести масив в зворотному порядку.
let arr55 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arr55_1 = [17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arr55_2 = [13, 6, 22, 31, 45, 66, 100, -18];
// let arr55_3 = [6, 22, 31, 45, 66, 100, -18];
// let arr55_4 = [22, 31, 45, 66, 100, -18];
// let arr55_5 = [31, 45, 66, 100, -18];
// let arr55_6 = [45, 66, 100, -18];
// let arr55_7 = [66, 100, -18];
// let arr55_8 = [100, -18];
// let arr55_9 = [-18];
// let arr55_10 = [];
//
// let newarr55 = [];
//
//
// if ('HHELLO') {
//   console.log(22);
// }
//
//
// while (arr55.length) {
//   console.log(arr55);
//   newarr55.unshift(arr55.shift());
// }
// console.log(newarr55);
//
//
//  let x = '';
//
//  let arrOfSymbols = ['a', 'b', 'c'];
//
// for (const symb of arrOfSymbols) {
//   // x = x + symb
//   x += symb
// }
//
// console.log(x);

let sum = 0;

for (const number of arr55) {
  sum = sum + number;
}

console.log(sum);

// Почему так обьявлять плохо:
const
  number1 = 5,
  number2 = 15.478,
  number3 = -4578


for (let i = 0; i <= 10; i += 2) {
  console.log(i);
  document.write(i);
}

let fS = 5/7