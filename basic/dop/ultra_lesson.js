// // let user = {
// //   name: 'Olga',
// //   email: 'olga@mail.com',
// //   password: '23456'
// // }
// //
// // const {name, email, password} = user;
// //
// // const userEmail = user.email;
// // const userName = user.name;
// // const userPassword = user.password;
// //
// //
// // let products = [
// //   'Yayko',
// //   'Yabko',
// //   'Grushka',
// //   'Chai'
// // ]
// //
// // const [, myYabko, myPear] = products;
// //
// // const eggs = products[0];
// // const apple = products[1];
// // const pear = products[2];
// //
// //
// // let hoursFrom = '22:00' // => ['09', '00']
// // let hoursTo = '18:20' // => ['18', '20']
// //
// // const [hourFrom] = hoursFrom.split(':')
// // const [hourTo] = hoursTo.split(':')
// //
// // if (+hourFrom > +hourTo) {
// //   console.log('Now valid working hours')
// // } else {
// //   console.log('All right')
// // }
// //
// //
//
//
// let maria = {
//   name: 'Maria',
//   email: 'maria.girl@company.com',
//   job: {
//     position: 'Trainee',
//     company: {
//       name: 'Sigma Software',
//       address: 'Naukova 7b'
//     }
//   }
// }
//
// let job = 'Designer'
//
// // const { job: mariasJob } = maria;
// // const { job: { company: {address} } } = maria;
// const { name, job: {position} } = maria;
//
// // console.log(job);
// // console.log('____________________');
// // // console.log(mariasJob);
// // console.log(address);
//
// console.log(name);
// console.log(position);
//
// console.log(maria);
//


let professions = [
  ['Dev', 'PM', 'QA'],
  ['CEO', "CTO", 'CIO'],
  ['HR', 'Office Manager', 'Lawyer']
];


let { 0: [, piEm], 1: [boss] } = professions;

let [[, , Toster], [c], [, om]] = professions

// console.log(piEm);
// console.log(boss);
// console.log(Toster);
// console.log(c);
// console.log(om);


let car = {
  color: 'White',
  model: 'S-Class'
}

let maria = {
  name: 'Maria',
  password: '5678',
  email: 'maria.girl@company.com',
  job: {
    position: 'Trainee',
    company: {
      name: 'Sigma Software',
      address: 'Naukova 7b'
    }
  }
}

// Object.assign({}, maria, car);

const mariaTrainee = { ...maria, car };
// ... => spread

// console.log(mariaTrainee);


const { password, ...objectWithoutPass } = mariaTrainee;

const nonDeepMary = { ...mariaTrainee };

// console.log('_____________________');
// console.log(objectWithoutPass);
// console.log('***********************');
// console.log(mariaTrainee);
// console.log('_____________________');


function frequency({ email, password }) {
  console.log(email);
  console.log(password);
  // some code
}


frequency(mariaTrainee)


const users = new Set();
users.add({ name: 'Asus' })
users.add({ name: 'Asus' })
users.add('Asus')
users.add('Asus')
users.add('Asus')
users.add('Asus')
users.add('Asus')
users.add('Lenovo')

// console.log(users);
//
//
// let names = ['Раджад', "Дхалмала", "Прадіп", "Дхалмала", "Культіва"];
//
// const uniqueNmaes = new Set(names);
//
// console.log(uniqueNmaes);
//
//
// const uNames = [...uniqueNmaes];
// console.log(uNames);
//
// const uNames2 = Array.from(uniqueNmaes);


const map = new Map();
map.set([1,2,3], 'HELLO')

// console.log(map);



/////// TODO UNIQUE ARRAY IF OBJECTS
///////  TODO СМАТРЕТЬ ВСЕМ
let usersFortest = [
  {name: 'Dima', age: 23},
  {name: 'Dima', age: 67},
  {name: 'Vova', age: 19},
  {name: 'Dima', age: 23},
  {name: 'Vova', age: 19},
];

function userMapper(users) {
  const map = new Map();

  users.forEach(user => {
    map.set(`${user.name}${user.age}`, user)
  })

  return map
}

let uniqueUsers = userMapper(usersFortest).values()

console.log(uniqueUsers);

///////



let products = ['Bread', 'Kinder', 'Mango', 'Fish', 'Eggs', 'Pit'];


products.forEach((value, index, array)=> {
  if (index === 3) {
    return
  }

  console.log(value);
  console.log(index);
  console.log(array);
  console.log('_________________________');
})
