// let numbers = [1, 6, 9, 0, 17, 22, 99];

// //
// //
// let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];

// //
// // // let arrInArr = [1.2, 5, [8,0 ,[9, 1], 8, 99, [0, 4, false, [8, [8,8, [9,9, [0,0]]], 0 ,1]]]];
// // //
// // // // // //
// // // // // // let sort = numbers.sort((a, b) => {
// // // // // //   console.log(a);
// // // // // //   console.log(b);
// // // // // //   console.log('______________');
// // // // // //
// // // // // //   return b - a
// // // // // // });
// // // // // //
// // // // // // console.log(sort);
// // // // // //
// // // // // // let sort1 = numbers.sort().reverse();
// // // // // //
// // // // // // console.log(sort1);
// // // // // //
// // // // // // let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew'];
// // // // // //
// // // // // // let sort2 = strs.sort((a, b) => {
// // // // // //   if (a < b) {
// // // // // //     return 1
// // // // // //   } else {
// // // // // //     return -1
// // // // // //   }
// // // // // // });
// // // // // //
// // // // // // console.log(sort2);
// // // // // //
// // // // // //
// // // // // //
// // // // // // let users = [
// // // // // //     {name: 'Dima', age: 10},
// // // // // //     {name: 'Nastya', age: 22},
// // // // // //     {name: 'Volodya', age: 19},
// // // // // //     {name: 'Yarko', age: 39},
// // // // // //     {name: 'Yevhen', age: 14},
// // // // // //     {name: 'Taras', age: 44}
// // // // // // ];
// // // // // //
// // // // // // let sortedUsers = users.sort((a, b) => {
// // // // // //   return a.age - b.age
// // // // // // });
// // // // // //
// // // // // // console.log(sortedUsers);
// // // // // //
// // // // // //
// // // // // //
// // // // // // // let numbers1 = numbers.filter((value) => {
// // // // // // //   return value % 2 === 0;
// // // // // // // });
// // // // // //
// // // // // // let numbers1 = numbers.filter(value => !(value % 2));
// // // // // //
// // // // // // console.log(numbers1);
// // // // // //
// // // // // //
// // // // //
// // // // // // let map = numbers.map((value, index) => {
// // // // // //   if (value % 2 === 0) {
// // // // // //     return value * 2
// // // // // //   }
// // // // // //
// // // // // //   return value;
// // // // // // });
// // // // //
// // // // // //
// // // // // // let map = numbers.map((value, index) => {
// // // // // //   return value * index
// // // // // // });
// // // // // //
// // // // // // console.log(map);
// // // // //
// // // // //
// // // // //
// // // // // let usersWithId = strs.map((name, index) => {
// // // // //   return {name, id: index + 1}
// // // // // });
// // // // //
// // // // // console.log(usersWithId);
// // // //
// // // //
// // // // numbers.forEach(value => {
// // // //   if (value % 2 === 0) {
// // // //     return
// // // //   }
// // // //
// // // //   console.log(value);
// // // // })
// // // //
// // // // let numbers1 = numbers.reverse();
// // // //
// // // // console.log(numbers1);
// // //
// // // //
// // // // let findedUser = strs.find(name => {
// // // //   return name.toLowerCase().startsWith('s')
// // // // });
// // // //
// // // // console.log(findedUser);
// // // //
// // // // let findedUser = strs.findIndex(value => {
// // // //   return name.toLowerCase().startsWith('d')
// // // // });
// // // //
// // // // console.log(findedUser);
// // //
// // //
// // // // let s = strs.join(' ^ ');
// // // // let isInclude = strs.includes('Vova')
// // // //
// // // // console.log(isInclude);
// // // //
// // // // let b = strs.some(value => {
// // // //   return value.toLowerCase().startsWith('d')
// // // // });
// // // //
// // // // let bE = strs.every(value => {
// // // //   return value.toLowerCase().startsWith('d')
// // // // });
// // // //
// // // //
// // // // console.log(b);
// // // // console.log(bE);
// // //
// // // let flat = arrInArr.flat(6);
// // //
// // // console.log(flat);
// //
// //
// // let sum = numbers.reduce((acc, currentValue) => {
// //   console.log(acc);
// //   console.log(currentValue);
// //   console.log('____________________');
// //
// //   return acc + currentValue
// // });
// //
// // // let sum = numbers.reduce((p, c) =>  p + c);
// //
// // console.log(sum);
//
// let users = [
//   {name: 'Dima', age: 10},
//   {name: 'Nastya', age: 22},
//   {name: 'Volodya', age: 19},
//   {name: 'Yarko', age: 39},
//   {name: 'Yevhen', age: 14},
//   {name: 'Taras', age: 44}
// ];
//
//
// let sumOfAges = users.reduce((acc, curr) => {
//   console.log(acc);
//   console.log(curr);
//   console.log('___________________');
//
//   return acc + curr.age
// }, 0);
//
// console.log(sumOfAges);

//
// function Animal(name, color) {
//   this.name = name
//   this.color = color
//
//   // this.run = function () {
//   //   console.log('RUNNING !!!')
//   // }
// }
//
// Animal.prototype.run = function () {
//   console.log(this.name + 'RUNNING !!!')
// }
//
//
//
// function Hamster(name, color, house) {
//   this.name = name
//   this.color = color
//   this.house = house
// }
//
// // Hamster.prototype = Animal.prototype
// // Hamster.prototype.__proto__ = Animal.prototype
// Hamster.prototype = Object.create(Animal.prototype)
//
//
// let z = new Animal('Zipka', 'Red');
//
// let x = new Animal('Bipka', 'Red');
// let c = new Animal('Mipka', 'Red');
// let v = new Animal('Zipka', 'Red');
//
//
// let gulka = new Hamster('Gulka', 'White', true);
//
// Hamster.prototype.run = function() {
//   console.log('HELLO WOLRD');
// }
//
// z.run()
// x.run()
// c.run()
//
//
// gulka.run()



function Hamster(name) {
  this.name = name;
  this.stomach = [];
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
  this.stomach.push(food)
}

let Gulka = new Hamster('Gulka')
let Bulka = new Hamster('Bulka')


console.log(Gulka.stomach);
console.log(Bulka.stomach);

Gulka.findFood('Grushka')
Gulka.findFood('Yabko')

console.log(Gulka.stomach);
console.log(Bulka.stomach);



