// let name2 = 'Victor'
// console.log(name2);
//
// let age:number;
//
// age = '0';


function numberChanger(numberToChange: number | string): string | number {

  if (typeof numberToChange === "number") {
    return +numberToChange.toFixed(2)
  }

  return numberToChange;
}

let s = numberChanger('HELLO');
console.log(s);

let changer = numberChanger(7.765868712913637);
console.log(changer);


class Car {
  protected year: number;
  private producer: string;
  public power: number = 3000;

  constructor(rik: number, producer: string) {
    this.year = rik;
    this.producer = producer;
  }

  changeYear() {
    this.year = 2007
  }
}

class superCar extends Car {
  color: string

  constructor(rik: number, producer: string, color: string) {
    super(rik, producer);
    this.color = color;
  }
}

let car1 = new Car(2000, 'Yamaha');
let car2 = new superCar(2000, 'Yamaha', 'red');


console.log(car1);
console.log(car2);


class User {
  private password: string;
  email: string

  constructor(pass: string, mail: string) {
    this.email = mail
    this.password = pass
  }

  loginUser(pass?: string, email?: string): boolean {
    // return pass === this.password && email === this.email;

    if (pass === this.password && email === this.email) {
      return true
    }

    return false
  }
}

let viktor = new User('878787878', 'victor@owu.com.ua');

let success = viktor.loginUser();
console.log(success);


let names: string[] | number[] = ['Ivan', 'Dima', 'Ira'];
let names6: any[] = ['Ivan', 'Dima', 'Ira'];
let names2: Array<string> = ['Ivan', 'Dima', 'Ira'];


let user = {
  name: 'Dimas',
  age: 33
}

interface IUser {
  name: string,
  age?: number,
  phone: {
    model: string,
    price: number,
    isNew: boolean
  },
  buyNewOne?: Function
}

let usersWithPhones: IUser[] = [{name: 'Ivan', phone: {isNew: true, model: 'Samsung A7', price: 6000}}];


const arrrrrt: Array<keyof IUser> = ["age", "phone", "buyNewOne"]


let IronBird: IUser = {
  phone: {
    price: 99999,
    model: 'ITelephone',
    isNew: false
  },
  name: 'Iron',
  age: 20,
  buyNewOne: () => {

  }
}


function getBirdValue(whatDoYouWnat: keyof IUser) {
  return IronBird[whatDoYouWnat]
}

let birdValue = getBirdValue("age");
console.log('_______________________');
console.log(birdValue);
console.log('_______________________');


enum EColors {
  RED,
  WHITE,
  BLUE
}


function setNewColor(color: EColors) {
  console.log(color);
}

setNewColor(EColors.RED);


enum EEmailTypes {
  WELCOME,
  FORGOT_PASS
}


function sendEmail(emailType: EEmailTypes) {
  if (emailType === EEmailTypes.WELCOME) {
    console.log('WELCOME TO PLATFOMR');
    return
  }

  if (emailType === EEmailTypes.FORGOT_PASS) {
    console.log('NEW PAS IS 22222');
    return
  }
}


sendEmail(EEmailTypes.WELCOME);

// ABSTACT CLASS

abstract class AbsCar {
  wheels: number;
  power: number;

  constructor(power: number, wheels: number = 4) {
    this.power = power
    this.wheels = wheels
  }

  bzzz() {
    console.log('BZZZZZZZZZZZ')
  }
}

class Gazel extends AbsCar {
  polomka: boolean;
  color: EColors;

  constructor(power: number, color: EColors, wheels: number = 4) {
    super(power, wheels);
    this.polomka = true
    this.color = color
  }
}

const killMachine = new Gazel(40, EColors.BLUE);

console.log(killMachine);

killMachine.bzzz()
