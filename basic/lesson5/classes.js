// let maria = {
//   name: 'Maria',
//   hair: 'black',
//   greeting: function () {
//     document.write(`Всім привіт. Мене звати ${this.name}`)
//   },
//   codding: function (hours = 8) {
//     document.write(`I am going to code ${hours} hour long`)
//   },
// //
// //
// //
// //   logTh: function () {
// //     console.log(this)
// //   },
// //   logThArr: () => {
// //     console.log(this)
// //   }
// }
// //
// maria.greeting();
// // document.write(`<br>`)
// // document.write(`<br>`)
// // maria.codding(13)
// // maria.logTh();
// // document.write(`<br>`)
// // document.write(`<br>`)
// // maria.logThArr();
// // document.write(`<br>`)
// // document.write(`<br>`)
//
// function Car(color, speed) {
//   this.color = color;
//   this.speed = speed;
//
//   this.ride = function () {
//     document.write(`I am riding ${this.speed} km/h`);
//   }
//
//   this.ret = function () {
//     return 'HELLO'
//   }
// }
//
// let tesla = new Car('White', 99);
// let volvo = new Car('Blue', 80);
// let vaz = new Car('red', 60);
//
// console.log(tesla);
// console.log(vaz)
//
//
// vaz.speed = 999999;
//
// vaz.ride()
//
//


function User(age, gender, laptops = ['Lenovo']) {
  this.gender = gender;
  this.age = age;
  this.education = 'high';
  this.laptops = laptops;

  this.addLaptop = function (laptopName) {
    this.laptops.push(laptopName)
  }
}

//
// let viktor = new User(24, 'male');
// let maria = new User(18, 'female', ['Dell', 'Mac']);
//
//
// viktor.addLaptop('Dell')
// // viktor.addLaptop('ACes')
// // viktor.addLaptop('Asus')
//
// maria.education = 'PhD'
//
// console.log(viktor);
// console.log(maria);


class Human {
  constructor(age, gender, color) {
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.money = 0;
  }

  eat() {
    console.log('Om nom nom')
  }

  goWork() {
    this.money += 100;
  }

  goBeer() {
    if (this.money > 200) {
      document.write('I AM HAMMERED')
      document.write(`<br>`)

      this.money -= 200;
    } else {
      document.write('DOW')
      document.write(`<br>`)

    }
  }
}


class Developer extends Human {
  constructor(age, gender, color, skill) {
    super(age, gender, color);
    this.skill = skill;
  }

  goBeer() {
    if (this.money < 500) {
      document.write('Вася позич до ЗП');
      document.write(`<br>`)

    } else {
      document.write('Го в правду');
      document.write(`<br>`)

      this.money = 0;
    }
  }

  codding() {
    document.write(`Tap tap tap on ${this.skill}`)
    document.write(`<br>`)
  }
}

let Iron = new Developer(20, 'female', 'white', 'JS');

Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()
Iron.goWork()

Iron.goBeer()

Iron.codding()

console.log(Iron);

let homer = new Human(35, 'male', 'yellow');

console.log(homer);

homer.eat();

homer.goBeer();

homer.goWork()
homer.goWork()
homer.goWork()

console.log(homer);

homer.goBeer();

console.log(homer);

homer.codding();



class MyAddres {
  constructor(street) {
    this.street = street;
  }
}

const robota = new MyAddres('H.UPA')
const dim = new MyAddres('VV')

let addreses = [robota, dim]
