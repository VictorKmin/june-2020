// console.log(22222);

const name = 'Viktor';
let age = 24;
let girl = true;

age = 'Twenty five';
// name = 'Dima';

console.log(age);
// alert(name);

document.write(girl);

// const userInput = prompt('How old r u?');
// document.write('<br>');
// document.write('<br>');
// document.write(userInput);

// console.log(true + '2');
// console.log(1 + true + true); // true = 1
// console.log(10 - '3');
// console.log(10 - 'TEST');
// console.log(10 * '5');
// console.log(10 / 'TEST');

// console.log(typeof NaN)


// const number1 = +prompt('Enter number 1');
// const number2 = +prompt('Enter number 2', 10);
//
// console.log(typeof number1);
// console.log(number1);
//
// console.log(typeof number2);
// console.log(number2);
// console.log(number1 + number2);
//
// const is18 = confirm('Ти дорослийй?))')
//
// console.log(is18);

const userAge = +prompt('Enter age')
const userLogin = prompt('Enter login')

// < > <= >= === !==
// if (userAge >= 18) {
//   alert('Ти вже великий ))')
// } else {
//
//   if (userLogin === 'admin') {
//     alert('Ти вже великий ))')
//   } else {
//     alert('іди в школу')
//   }
//
// }

// if (userAge >= 18) {
//   alert('Ти вже великий ))')
// } else if (userLogin === 'admin') {
//   alert('Ти вже великий ))')
// } else {
//   alert('іди в школу')
// }

// || -> OR
// && -> AND

// if (userLogin === 'admin' && userAge >= 18) {
//   alert('Ти вже великий ))')
// } else {
//   alert('іди в школу')
// }

document.write('<br>');

switch (userLogin) {
  case 'Viktor':
    document.write('Hello boss');
    document.write('<br>');
    break;

  case 'Karina':
    document.write('Hello darling');
    document.write('<br>');
    break;

  case 'Ivan':
    document.write('Добрий день')
    document.write('<br>');
    break;

  default:
    document.write('Імя не знайдено')
    document.write('<br>');
    break;
}