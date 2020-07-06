let greenDiv = document.getElementById('divka');

console.log(greenDiv);

greenDiv.style.backgroundColor = 'yellow';
// greenDiv.innerText = '<b> HELLO </b>';
greenDiv.innerHTML = '<b> HELLO </b>';

let boldT = document.getElementsByClassName('boldText');

boldT[0].style.color = 'silver';

for (let i = 0; i < boldT.length; i++) {
  boldT[i].style.fontSize = '24px';
  boldT[i].innerText = `JSCX-JUNE-202${i}`
}
;


let allDivs = document.getElementsByTagName('div');

console.log(allDivs);

let green = Math.random() * 255;
let red = Math.random() * 255;
let blue = Math.random() * 255;

allDivs[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
allDivs[1].style.width = '200px'
allDivs[1].style.height = '200px'
allDivs[1].style.margin = '20px';


let smallDivka = document.createElement('div');
smallDivka.style.backgroundColor = `pink`;
smallDivka.style.width = '50px';
smallDivka.style.height = '50px';

smallDivka.classList.add('myOwnClass', 'myClass');
// smallDivka.classList.add('myClass');
smallDivka.classList.remove('myOwnClass');
console.log(smallDivka.classList);

document.body.appendChild(smallDivka);


let allP = document.getElementsByTagName('p');

for (let i = 0; i < allP.length; i++) {
  const singleP = allP[i];

  if (i % 2 === 0) {
    singleP.classList.add('myOwnClass');
  }
}

const students = [
  {name: 'Sergey', age: 20},
  {name: 'Julia', age: 18},
  {name: 'Vova', age: 25},
  {name: 'Dima', age: 9},
  {name: 'Rostik', age: 2},
];

for (let i = 0; i < students.length; i++) {
  let studentDiv = document.createElement('div');

  studentDiv.style.backgroundColor = 'pink';
  studentDiv.style.margin = '25px';
  studentDiv.innerHTML = `
            Hello darling. My name is ${students[i].name} <br>
            And I am ${students[i].age} years old`;

  document.body.appendChild(studentDiv);
}
let obj = {
  name: "Ivan",
  wife: undefined,
  payment: NaN,
  son: `Dima`,
  age: 22,
  work: [{position: 'Dev'} , {position: 'Buiduer'}]
}

let jsonUser = JSON.stringify(obj);

console.log(jsonUser);
console.log(typeof jsonUser);

console.log(obj);


let parsedUser = JSON.parse(jsonUser);

console.log(parsedUser);