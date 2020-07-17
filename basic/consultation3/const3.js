// // // // // // дан отсортированный по возрастанию массив целых чисел.
// // // // // // Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// // // // // // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
// // // // // // Размер массива не более 10 элементов.Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// // // // // // Если такого элемента нет в массиве, выведите -1.
// // // // // //
// // // // // // Пример:Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // // // // // Key = 1 Answer: MinIndex = 0, MaxIndex = 0.
// // // // // // Key = 4 Answer: MinIndex = 3, MaxIndex = 6.
// // // // // //
// // // // // //
// // // // // // let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// // // // // //
// // // // // // function finder(number, arr) {
// // // // // //
// // // // // //   let minIndex = arr.indexOf(number)
// // // // // //   let maxIndex = arr.lastIndexOf(number)
// // // // // //
// // // // // //   console.log('MinIndex = ' + minIndex)
// // // // // //   console.log('MaxIndex = ' + maxIndex)
// // // // // // }
// // // // // //
// // // // // // finder(1, arr)
// // // // // // finder(4, arr)
// // // // //
// // // // //
// // // // // let arr = [1, 14];
// // // // //
// // // // // let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// // // // //
// // // // // function recursator(i) {
// // // // //
// // // // //   if (i < strs.length) {
// // // // //     console.log(strs[i]);
// // // // //
// // // // //     ++i;
// // // // //     recursator(i);
// // // // //   }
// // // // // }
// // // // //
// // // // //
// // // // // recursator(0)
// // // // //
// // // // //
// // // // // // function deepCopy(obj) {
// // // // // //   let objCopy = Array.isArray(obj) ? [] : {};
// // // // // //   for (const key in obj) {
// // // // // //     objCopy[key] = (typeof obj[key] === 'object') ? deepCopy(obj[key]) : obj[key];
// // // // // //   }
// // // // // //   return objCopy;
// // // // // // }
// // // // //
// // // // //
// // // //
// // // //
// // // // let a = 10;
// // // // let b = a;
// // // //
// // // // b = 20;
// // // //
// // // // console.log(a);
// // // // console.log(b);
// // // //
// // // //
// // // // let obj = { name: 'Vova' };
// // // // let newObject = obj;
// // // //
// // // // newObject.name = 'Dima'
// // // //
// // // // console.log(obj);
// // // // console.log(newObject);
// // // //
// // // //
// // // // let s = JSON.stringify(obj);
// // // //
// // // // let objRealCopy = JSON.parse(s);
// // // // console.log(s);
// // // //
// // // // objRealCopy.name = 'Jason'
// // // //
// // // // console.log(obj);
// // // // console.log(newObject);
// // // // console.log(objRealCopy);
// // //
// // //
// // let users = [
// //   { name: 'Dima', age: 10 },
// //   { name: 'Nastya', age: 22 },
// //   { name: 'Volodya', age: 19 },
// //   { name: 'Yarko', age: 39 },
// //   { name: 'Yevhen', age: 14 },
// //   { name: 'Taras', age: 44 }
// // ];
// //
// // let numbers = users.map((user, id) => {
// //   user.id = id + 1
// //
// //   return user
// // });
// //
// //
// // console.log(numbers);
// // console.log(users);
// // //
// // // //
// // // //
// // // // let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// // // //
// // // //
// // // // let numbers2 = arr.map(value => value * 2);
// // // //
// // // // console.log(arr);
// // // // console.log(numbers2);
// //
// //
// // let strs = ['a', 'B', 'Hello', 'what', 'citrus', 'Orange', 'pokemon', 'Y', 'real', 'tru', 'false'];
// //
// //
// // let sortStr1 = strs.sort((a, b) => {
// //   if (a.toLowerCase() > b.toLowerCase()) {
// //     return -1
// //   }
// //
// // });
// // console.log(sortStr1);
// //
// //
// // let sortStr = strs.sort((a, b) => {
// //   if (a.toLowerCase() < b.toLowerCase()) {
// //     return 1
// //   } else {
// //     return -1
// //   }
// // });
// // console.log(sortStr);
// //
// //
// //
// //
// //
// // let user = { name: 'Viktor', age: 24 }
// // let car = { model: 'Zipka', age: 10 }
// //
// //
// // let assign = Object.assign({}, user, car);
// //
// // console.log(assign);
// //
// // console.log(user);
// // console.log(car);
// //
// //
// // // -створити функцію конструктор попелюшка з полями
// // // ім'я, вік, розмір ноги
// // // --Створити 10 попелюшок , покласти їх в масив
// // // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік,
// // // туфелька яку він знайшов, та функцію "пошук попелюшки"
// // // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// //
// //
// // function Cinderella(size, name) {
// //   this.age = 17
// //   this.name = name
// //   this.size = size
// // }
// //
// // let me = { name: 'Andrii', sizeOffTufla: 38 };
// //
// // let innesa = new Cinderella(36, 'Innesa')
// // let maria = new Cinderella(37, 'Maria')
// // let kris = new Cinderella(35, 'Kristi')
// // let lilia = new Cinderella(34, 'Lillia')
// // let oksana = new Cinderella(32, 'Oksana')
// // let olga = new Cinderella(38, 'Olga')
// // let dimas = new Cinderella(38, 'Dima')
// //
// // let girls = [innesa, maria, kris, lilia, oksana, olga, dimas];
// //
// //
// // let cinderellas = girls.filter(girl => girl.size === me.sizeOffTufla);
// // let myPrecious = girls.find(girl => girl.size === me.sizeOffTufla);
// //
// // console.log(cinderellas);
// // console.log(myPrecious);
// //
// //
// // let myGirl = null
// //
// // for (const girl of girls) {
// //   if (girl.size === me.sizeOffTufla && !myGirl) {
// //     myGirl = girl
// //   }
// // }
// //
// //
// // console.log(myGirl);
//
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),
// //   та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
// //   Для кожного автомобіля створити свій блок,
//
// //   та додати його в елемент, індентифікатор якого ви отримали.
// //   Всі властивості авто в обному блоці
//
// let cars = [
//   { owner: 'Dima', age: 10 },
//   { owner: 'Nastya', age: 22 },
//   { owner: 'Volodya', age: 19 },
//   { owner: 'Yarko', age: 39 },
//   { owner: 'Yevhen', age: 14 },
//   { owner: 'Taras', age: 44 }
// ];
//
// function carsAds(cars, elemId) {
//   const hereIllInsertMyCars = document.getElementById(elemId);
//
//   if (!hereIllInsertMyCars || !Array.isArray(cars)) {
//     return
//   }
//
//   for (const car of cars) {
//     const carDiv = document.createElement('div');
//     carDiv.style.backgroundColor = 'pink';
//     carDiv.style.margin = '25px';
//     carDiv.innerText = `owner: ${car.owner} \n age: ${car.age}`
//
//     hereIllInsertMyCars.appendChild(carDiv)
//   }
// }
//
//
// carsAds(cars, 'carsHere')
//
//
// // console.log(typeof {});
// // console.log(typeof []);
// // console.log(Array.isArray([]));
// // console.log(Array.isArray({}));
//
//
// console.log(typeof NaN);
// console.log(typeof 3);
//
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(3));
//
//
//
//
//
//
// let arrInArr = [1, 2, [3, 4], 5, [6, [7, 8, [90]]]];
//
// let flat = [];
//
// function flatter(arrayToFlat) {
//
//   arrayToFlat.forEach(el => {
//     if (Array.isArray(el)) {
//       flatter(el)
//     } else {
//       flat.push(el)
//     }
//   })
// }
//
// flatter(arrInArr)
//
// console.log(flat);


// -создать массив со словами на 15 - 20 элементов.
// --отсортировать его по алфавиту в восходящем порядке.
let words = [
  'АННА',
  'СОФІЯ',
  'МАРІЯ',
  'ВЕРОНІКА',
  'ВІКТОРІЯ',
  'АНАСТАСІЯ',
  'ЯНА',
  'ЄВА',
  'МАРТА',
  'ЗЛАТА',
  'СОЛОМІЯ',
  'МЕЛАНІЯ',
  'ДАРИНА',
  'МІЛАНА',
  'АНГЕЛІНА'
];

const cE = words[0].charCodeAt(0)
const cS = words[1].charCodeAt(0)

console.log(words[1].localeCompare(words[0]));

let newWords = words.sort((a, b) => {
  return a.localeCompare(b)
})
console.log(newWords);


console.log(cE);
console.log(cS);
