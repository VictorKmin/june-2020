// // // // https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
// // //
// // // fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// // //   .then(value => {
// // //     return value.json()
// // //   })
// // //   .then(json => {
// // //     json.forEach(({ ccy, base_ccy, buy, sale }) => {
// // //       buy = (+buy).toFixed(2)
// // //       sale = Number(sale).toFixed(2)
// // //
// // //       document.write(`${ ccy } - ${ base_ccy }: Buy ${ buy }. Sale: ${ sale }`)
// // //       document.write(`<br>`)
// // //     })
// // //   })
// //
// //
// // let viktor = {
// //   name: 'Viktor',
// //   age: 24,
// //   payment: 1000000,
// //   position: 'Middle'
// // }
// //
// // let fimas = {
// //   name: 'Fima',
// //   age: 45,
// //   payment: 10000000,
// //   position: 'Senior'
// // }
// //
// // let olga = {
// //   name: 'Olga',
// //   age: 15,
// //   payment: 100000,
// //   position: 'Junior'
// // }
// //
// //
// // function sayHello() {
// //   console.log(this.name + ' say hello to u')
// //   console.log(this)
// //   console.log('__________________')
// // }
// //
// // // sayHello();
// // //
// // //
// // // sayHello.call(viktor)
// // // sayHello.apply(fimas)
// // // let olgasHello = sayHello.bind(olga);
// // //
// // // olgasHello();
// // // olgasHello();
// // // olgasHello();
// // // olgasHello();
// //
// //
// // function changePayment(changeRate, newPosition) {
// //   this.payment += changeRate;
// //   this.position = newPosition ? newPosition : this.position
// // }
// //
// // changePayment.call(olga, 99, 'Strong Junior');
// // changePayment.apply(viktor, [999999, 'Ice']);
// //
// // let getMoneyForFimas = changePayment.bind(fimas, 100);
// //
// // console.log(olga);
// // console.log(viktor);
// //
// // getMoneyForFimas()
// //
// // console.log(fimas);
//
// function clos() {
//   let x = 0;
//
//   return () => {
//     x++
//     console.log(x);
//   }
// }
//
// // let clos1 = clos();
// // clos1()
// // clos1()
// // clos1()
// // clos1()
//
// // clos()  ()
// // clos()  ()
// // clos()  ()
// // clos()  ()
// // clos()  ()
//
//
// function closure() {
//   const name = 'Viktor';
//   let age = 24;
//
//   function getName() {
//     return name;
//   }
//
//   function getAge() {
//     return age
//   }
//
//   function setAge(newAge) {
//     if (newAge < age) {
//       alert('Ніколи не стану молодим ;(')
//       return;
//     }
//     age = newAge
//   }
//
//   return {
//     getAge: getAge,
//     getName: getName,
//     setAge
//   }
// }
//
// let me = closure();
//
// console.log(me.getName());
// console.log(me.getAge());
//
// me.setAge(25);
//
// console.log(me);
//
// console.log(me.getAge());
//
// console.log(me.getName());


// let number = [1, 1, 11, 2, 8, 9, 2, 8, 6, 0, 0, 8, 4];
//
// let uniqueNumbers = new Set;
//
// number.forEach(number => {
//   uniqueNumbers.add(number)
// })
//
// console.log(uniqueNumbers);
//
//
// // for (const n of uniqueNumbers) {
// //   console.log(n);
// // }
// //
// // uniqueNumbers.forEach((value, value2, set) => {
// //   console.log(value);
// //   console.log(value2);
// //   console.log(set);
// //   console.log('______________');
// // })
//
//
//
// const setOfObjects = new Set;
//
// setOfObjects.add({ name: 'Dinad' })
// setOfObjects.add({ name: 'Dinad' })
//
// console.log(setOfObjects);
//
//
// let numbersUnique = Array.from(uniqueNumbers);
//
// console.log(numbersUnique);


let mumap = new Map;

let keyOfMap = {name: 'Max'}

mumap.set(keyOfMap, ['Hello', 'its me'])
mumap.set(['Hello', 'its me'], {name: 'Max'})


let xxxx = mumap.get(keyOfMap);

console.log(mumap.values());

console.log(mumap);
console.log(xxxx);
