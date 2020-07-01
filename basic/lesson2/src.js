// // // let str = 'This is string';
// // // let num = 22;
// // // let bol = true;
// // // let undef = undefined;
// // // let nulll = null;
// // // let obj = {};
// // // let symb = Symbol();
// // // let bInt = BigInt(99999999999999999999999999999999999);
// // //
// // // console.log(bInt);
// // //
// // // let x;
// // //
// // // console.log(x);
// // // console.log(nulll);
// // //
// // // console.log(typeof undefined)
// // //
// // // let age = 24;
// // // age = 'Twenty five'
// //
// //
// // let names = ['Dima', 'Ira', 'Vova', 2, true];
// //
// // // console.log(names[1], names[2]);
// // //
// // // let age = 71;
// // //
// // // // names[0] = 'Viktor';
// // // // names[99] = 'Karina';
// // // //
// // // // names = [];
// // // // names.length = 0;
// // //
// // // console.log(names[4]);
// // //
// // //
// // // let array = [
// // //   ['Olga', 'Vova'],
// // //   names,
// // //   age
// // // ];
// // //
// // //
// // // console.log(array);
// // // console.log(array[1]);
// // // console.log(array[1][3]);
// //
// // // names.push('Viktor');
// // // names.unshift('Sergio');
// //
// // let poppedElement = names.pop();
// // let shiftedElement = names.shift();
// //
// // console.log(poppedElement);
// // console.log(shiftedElement);
// //
// // console.log(names);
//
//
//
// let user = {
//   name: 'Viktor',
//   age: 24,
//   car: true,
//   jobs: ['Developer', 'Teacher'],
//   work: {
//     title: 'Middle Node.js',
//     company: {
//       name: 'Inoxoft'
//     }
//   }
// };
//
// // console.log(user);
// // console.log(user['name']);
// // console.log(user.name);
//
// console.log(user.work.title);
// console.log(user.jobs);
//
// user.car = 'Chevy';
//
// delete user.age;
//
// user.girl = {
//   name: 'Olga',
//   job: {
//     title: 'Reactor'
//   }
// };
//
//
// let keys = Object.keys(user);
// let values = Object.values(user);
//
// console.log(keys);
// console.log(values);
//
// // console.log(user);
//
//
// // let storage = ['утюг', "Телевізор", user];


let names = ['Dima', 'Ira', 'Vova', 2, true, 'Sergio', 'Elena', 'Roman'];

// console.log(names.length);
//
// for (let i = 0; i < names.length; i++) {
//   document.write(names[i]);
//   document.write('<br>')
// }
//
let i = 1;

while (i < names.length) {
  document.write(`<div> ${names[i]} </div>`)
  i+=2;
}
//
// for (const name of names) {
//   document.write(name);
//   document.write('<br>')
// }
//
// for (const name in names) {
//   console.log(name)
// }


let user = {
  name: 'Viktor',
  age: 24,
  car: true,
  jobs: ['Developer', 'Teacher'],
  work: {
    title: 'Middle Node.js',
    company: {
      name: 'Inoxoft'
    }
  }
};

for (const key in user) {
  console.log(user[key]);
  console.log('____________________');
};