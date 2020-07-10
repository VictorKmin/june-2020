// // // -- отримує всі елементи 'a' ///// та додає їм клас element_XXX. //// Де XXX - текстовий контент елементу a
// //
// // let as = document.getElementsByTagName('a');
// //
// // for (let i = 0; i < as.length; i++) {
// //   const a = as[i];
// //   const aText = a.innerText;
// //
// //   a.classList.add(`element_${aText}`);
// // }
// //
// //
// // // 2a отримує елемент з класом content_1
// // // 2b та заміняє в ньому тест на довільний.
// // // 2c Текст отримати з prompt()
// //
// // let contentOne = document.getElementsByClassName('content_1')[0];
// // contentOne.innerText = prompt('ENTER TEXT')
//
// //
// // function BiggerElement(myA, myB, myC) {
// //   console.log(myA);
// //   console.log(myB);
// //   console.log(myC);
// //
// //   return myA + myB + myC;
// // }
// //
// // console.log(BiggerElement(10, 7, 4));
//
// // // - Дано 2 масиви з рівною кількістю об'єктів.
// // // Масиви:
// // let usersWithId = [
// //   {id: 1, name: 'vasya', age: 31, status: false},
// //   {id: 2, name: 'petya', age: 30, status: true},
// //   {id: 3, name: 'kolya', age: 29, status: true},
// //   {id: 4, name: 'olya', age: 28, status: false}
// // ];
// //
// // let citiesWithId = [
// //   {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// //   {user_id: 2, country: 'Poland', city: 'Krakow'},
// //   {user_id: 3, country: 'USA', city: 'Portland'},
// //   {user_id: 4, country: 'USA', city: 'Miami'}
// // ];
// // // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// // //   Записати цей об'єкт в новий масив
// // // Частковий приклад реультату:
// //
// // let usersWithCities = [{
// //   id: 1,
// //   name: 'vasya',
// //   age: 31,
// //   status: false,
// //   address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}
// // }];
// //
// // // 3a Перебрати масив юзерів циклом
// // // 3b Всередині циклу який перебирає юзерів перебирати міста
// // // 3c якщо id юзера та user_id міста співпадає
// // // 3d додати юзеру адресу, яка співпала
// //
// // for (let i = 0; i < usersWithId.length; i++) {
// //   for (let j = 0; j < citiesWithId.length; j++) {
// //
// //     if (usersWithId[i].id === citiesWithId[j].user_id) {
// //       usersWithId[i].address = citiesWithId[j]
// //     }
// //
// //   }
// // }
// //
// // console.log(usersWithId);
//
// // - створити функцію
// // яка приймає будь-яку кількість чисел,
// // повертає найменьше,
// // а виводить найбільше
//
// //
// // function minimatorMaximator() {
// //   let min = arguments[0];
// //   let max = arguments[0];
// //
// //   for (let i = 1; i < arguments.length; i++) {
// //     if (arguments[i] < min) {
// //       min = arguments[i]
// //     }
// //
// //     if (arguments[i] > max) {
// //       max = arguments[i]
// //     }
// //   }
// //
// //   console.log(max + ' MAX')
// //   return min;
// // }
// //
// // let nim = minimatorMaximator(2, 9, 6, -5, 4, 10, 16, 8, 0, -90, 7, 88, 54, 78);
// //
// // console.log(nim);
//
//
// // // - Создать массив пользователей.
// // // У каждого пользователя обязательно должено быть поле skills которое является массивом.
// // // Проитерировать массив пользователей
// // // и в каждом пользователе проитерировать его массив skills.
// // // Скопировать все skills всех пользователей в отедльный массив
// //
// // const users = [
// //   {name: 'vasya', age: 31, status: false, skills: ["java", "js", "python"]},
// //   {name: 'petya', age: 30, status: true, skills: ["js", "node.js"]},
// //   {name: 'kolya', age: 29, status: true, skills: ["java", "spring"]},
// //   {name: 'olya', age: 28, status: false, skills: ["html", "css"]},
// //   {name: 'max', age: 30, status: true, skills: ["c++", "java"]}
// // ];
// //
// //
// // const usersSkills = [];
// //
// // for (let i = 0; i < users.length; i++) {
// //   const user = users[i]
// //
// //   for (let j = 0; j < user.skills.length; j++) {
// //     const skill = user.skills[j]
// //       usersSkills.push(skill)
// //   }
// // }
// //
// // console.log(usersSkills);
//
//
// // якщо приходить великий масив з невизначеною к-тю елементів,
// // і кеями
// // і обєктами
// // і масивами,
// // як проітерувати ?
//
// const bugArr = [true, 22, {name: 'Julia'}, ['JS', 'Java', 'Python']];
//
// for (let i = 0; i < bugArr.length; i++) {
//   const bugArrElement = bugArr[i];
//   console.log(bugArrElement);
// }
//
//
// // створити функцію
// // яка скаладає значення елементів з однаковими індексами
// // та повертає новий результуючий масив.
// // Приклад [1, 2, 3, 4, 9, 6]
// //         [2, 3, 4, 5]
// //         [3, 5, 7, 9, 9, 6]
//
// function arraySumator(arr1, arr2) {
//   const resultArr = [];
//   const iterationCount = arr1.length > arr2.length ? arr1.length : arr2.length;
//
//   for (let i = 0; i < iterationCount; i++) {
//     const sumOfElems = (arr1[i] || 0) + (arr2[i] || 0);
//
//     resultArr.push(sumOfElems)
//   }
//
//   return resultArr;
// }
//
// let someArr = arraySumator([1, 2, 3, 4, 9, 6], [2, 3, 4, 5]);
//
// console.log(someArr);
//
//
// let x = 10;
// let y = 17
//
// if (x > y) {
//   console.log('HOORAY');
// } else {
//   console.log('OH NO');
// }
//
// (x > y || x > 6) ? console.log('HOORAY 22') : console.log('OH NO 22');
//
// // як відобразити об'єкт в тілі документа?
//
// let natali = {name: 'Iron', surname: 'Bird'}
//
// document.write(JSON.stringify(natali));
//
//
//
// Створити функцію,
// приймає масив та число "i",
// та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


// function itemChanger(array, i) {
//   const buffer = array[i];
//
//   array[i] = array[i + 1]
//   array[i + 1] = buffer;
//
//   console.log(array);
// }
//
//
// itemChanger([1, 2, 3, 4, 9, 62, 3, 4, 5], 4)
