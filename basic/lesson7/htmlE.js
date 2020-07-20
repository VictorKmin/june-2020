// let element = document.querySelector('#green p.myClass');
//
// console.log(element);
//
//
// element.setAttribute('someAttr', 'TESTATTTR')
// element.setAttribute('class', 'HELLo')
// element.setAttribute('id', 'myId')
//
//
// console.log(document.forms);
//
// const forma = document.forms.myForm2
//
// forma.okBtn.onclick = (ev) => {
//   ev.preventDefault();
//
//   const input = forma.someText.value;
//   const check = forma.check1;
//   const rad = forma.rad;
//
//   const object = {
//     textInpt: input
//   }
//
//   forma.someText.value = ''
//   forma.check1[0].checked = false
//   forma.check1[1].checked = false
//
//   console.log(object);
// }
//
//
// // console.log(forma.someText.value);
// //
// // console.log(forma.check1);
// //
// // for (const checkBox of forma.check1) {
// //   console.log(checkBox.checked);
// //   console.log(checkBox.value);
// //   console.log('_______________');
// // }
// //
// //
// // for (const radioBtn of forma.rad) {
// //   console.log(radioBtn.checked);
// //   console.log(radioBtn.value);
// //   console.log('_______________');
// // }
// //
// // console.log(forma.rad);
// //
// //
// // let blueDiv = document.getElementById('blue');
// //
// // blueDiv.onclick = () => {
// //   if (blueDiv.style.backgroundColor === 'cornflowerblue') {
// //     blueDiv.style.backgroundColor = 'yellow'
// //   } else {
// //     blueDiv.style.backgroundColor = 'cornflowerblue'
// //   }
// //   console.log('BLUE CLICK')
// // }
// //
// // let greenD = document.getElementById('green');
// //
// // greenD.onclick = () => {
// //   document.forms.myForm2.someText.value = 'GREEN DEV CLICK YOU'
// // }
// //
// //
// // // greenD.onmouseover = () => {
// // //   greenD.style.display = 'none'
// // // }
// // //
// // // greenD.onmouseleave = () => {
// // //   console.log('leave');
// // // }
// //
// //
// // blueDiv.oncopy = () => {
// //   console.log('COPY');
// //   blueDiv.innerText = ''
// //
// //   return false;
// // }
// //
// //
// // greenD.onmousemove = (ev) => {
// //   const x = ev.x
// //   const y = ev.y
// //
// //   greenD.style.backgroundColor = `rgb(${ x }, ${ y }, ${ (x + y) / 2 })`
// //   console.log(x, y);
// // }
// //
// // greenD.onclick = (ev) => {
// //   console.log(ev);
// // }


// let blue = document.getElementById('blue');
// let green = document.getElementById('green');
// let red = document.getElementById('red');
//
// // blue.onclick = () => {
// //   console.log('blue');
// // }
// //
// // green.onclick = () => {
// //   console.log('green');
// // }
// //
// // red.onclick = () => {
// //   console.log('red');
// // }
//
// blue.addEventListener('click', (ev) => {
//   ev.stopPropagation()
//   console.log('blue');
// })
//
// green.addEventListener('click', (ev) => {
//   ev.stopPropagation()
//   console.log('green');
// })
//
// red.addEventListener('click', (ev) => {
//   ev.stopPropagation()
//   console.log('red');
// })


let dimsaik = {
  name: 'Dima',
  age: 22,
  car: {
    model: 'X',
    year: 1999
  },
  girl: {
    name: 'Ira',
    age: 18
  }
}

// let name = dimsaik.name
// let age = dimsaik.age
// let girl = dimsaik.girl
//
//
// const name = 'Viktor'
//
// // let dimaName = dimsaik.name
//
// let { age, name: dimaName, girl, car: {model} } = dimsaik;
//
// console.log(age);
// console.log(name);
// console.log(dimaName);
// console.log(girl);
// console.log(model);


const { name, age, ...otherParams } = dimsaik;

console.log(name);
console.log(age);
console.log(otherParams);


let dimas = { ...dimsaik, payment: 333 }

dimas.name = 'VOVA'
dimas.girl.age = 90

console.log(dimas);
console.log(dimsaik);


let arr = ['Oleksii', 'Bohdan', 'Igor', 'Rostik', 'Sergio'];

// let [lesha, bodya, ihor, ...otherBoyz] = arr
let [, , ihor] = arr

// console.log(lesha);
// console.log(otherBoyz);

let arrC = [...arr, 'Olaf']

console.log(arrC);


let obj = {
  name: 'Dima',
  age: 22,
  cars: ['Zaz', 'Mers', 'Bmw']
};

let {cars: [,mesr]} = obj

console.log(mesr);
