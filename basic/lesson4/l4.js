// // let str = '        HELLO wOrlD            I am developer        ';
// //
// // let indexOf = str.indexOf('o');
// // let lastIndexOf = str.lastIndexOf('o');
// // document.write(indexOf)
// // document.write('<br>')
// // document.write(lastIndexOf);
// // document.write('<br>')
// //
// //
// // let chatAt = str.charAt(7);
// // document.write(chatAt);
// // document.write('<br>');
// //
// //
// // let charAtCode = str.charCodeAt(7);
// //
// // document.write(charAtCode);
// // document.write('<br>');
// //
// //
// // let s = str.concat(' JS');
// //
// // document.write(s);
// // document.write('<br>');
// //
// // let replaced = str.replace(new RegExp(/o/g), 'z');
// // let replaced2 = str.replace('o', 'z');
// //
// // document.write(replaced);
// // document.write('<br>');
// // document.write(replaced2);
// // document.write('<br>');
// //
// //
// // let s1 = str.slice(10, 15);
// //
// // console.log(s1);
// //
// // let strings = str.split(' ');
// //
// // console.log(strings);
// //
// // let words = ['Hello', 22, true ,'World']
// //
// // let s2 = words.join(';');
// //
// // console.log(s2);
// //
// // let lower = str.toLowerCase();
// // let upper = str.toUpperCase();
// //
// // console.log(upper);
// // console.log(lower);
// //
// // let isStartWith = str.startsWith('hello');
// // let isEndsWith = str.endsWith('per');
// //
// // console.log(isStartWith);
// // console.log(isEndsWith);
// //
// //
// // let trimmed = str.trim();
// // console.log(trimmed);
// // console.log(str);
// //
// //
// // let isInclude = str.includes('L');
// //
// // console.log(isInclude);
// //
// //
// // ///// FUNCTIONS
//
//
// function writer(a) {
//   document.write('Hello I am function ' + a);
//   document.write('<br>');
// }
//
//
// writer('HELLO');
//
// writer('PARAMS @@@@@');
//
// writer([1, 2, 3]);
//
// writer(false);
//
// console.log('_________________________________________')
// calculator(10, 5)
// console.log('_________________________________________')
//
// function calculator(a, b, x = 0) {
//   console.log(a + b + x)
// }
//
// calculator(10, 5)
// calculator(10, 5, 99999);
//
//
// function myFunction() {
//   console.log(arguments);
//
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
//
// myFunction(1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789]);
// // myFunction(87878)
// // myFunction(1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789],1, 2, 8, 'Roman', false, 'HELLO', [124567, 65789])
//
//
// (function () {
//   console.log('I AM SELF INVOKE')
// })();
//
//
// // DECLARATION
// function declar(x) {
//   console.log(x);
// }
//
// // EXPRESSION
// let expr = function (x) {
//   console.log(x);
// }


// RETURN


// function sumator(a, b) {
//   let sum = a + b
//   // console.log(sum);
//
//   return [sum, 10, 'Hello'];
//   return [22332232]; // NO NO NO
//
//   console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
// }
//
//
// let sumOfEls = sumator(10, 999999);
//
//
// console.log('***************************');
// console.log(sumOfEls);
// console.log('***************************');


//ARROW FUNCTION

// let arrow = (a, b) => {
//   return a + b
// }

let arrow = (a, b) => a + b;

let sum = arrow(909090909090, 1);

console.log(sum);




