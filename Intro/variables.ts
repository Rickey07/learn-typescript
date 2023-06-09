let greetings: string = "hello world";
console.log(greetings);

let numbers: number[] = [1, 2, 3, 4];

// Explicit Type Checking

function addNumbers(num: number) {
  return num + 2;
}

addNumbers(5);

function getUpper(str: string) {
  return str.toUpperCase();
}

console.log(getUpper("Hello world"));

function greet(person: string, date: Date) {
  console.log(`Hello ${person} today is ${date.toDateString()}`);
}

greet("Prabadhya", new Date());

// function getValue(myVal:number) {
//     if(myVal>5) return true
//     return "200 OK"
// }


// Check return type and parameter Type
const getHello = (s: string): string => {
  return "Hello";
};

const heroes = ["Thor", "Captain America", "Iron-Man"];

heroes?.map((hero): string => {
  return `Hero is ${hero}`;
});

// Void Type to be used when function doesn't return anything

function helloWorld(errorMessage: string): void {
  console.log(errorMessage);
}

helloWorld("Hello world");

// Union Types

function welcomeMessage (x:string[] | string):void {
    if(Array.isArray(x)) {
        console.log(`Hello ${x.join(" and ")}`)
    } else {
        console.log(`Welcome Lone Traveller` + x)
    }
}

const passengers:string[] = ["Prabadhya","Harshit","Goutam"]
const passenger:string = "Bhavesh"

 
welcomeMessage(passenger)

// Objects

const user = {
    name:"Prabadhya",
    email:"Rickeyrickey747@gmail.com",
    isActive:true
}

function createUser ({name: string,isPaid: boolean}) {

}

createUser({name:"Prabadhya",isPaid:true})

function createCourse (): {name:string,price:number} {
    return {name:"React JS",price:399}
}

// Type Aliases 

type Person = {
    name:string,
    class:number,
    age:number,
    school:string
}

const newPerson = {
    name:"Prabadhya",
    class:6,
    age:18,
    school:"New Era Higher Secondary School"
}

const logUserDetails = (pt:Person):void => {
    console.log(`Hello world My Name is ${pt.name} my age is ${pt.age} I am in  ${pt.class}th class`)
}

logUserDetails(newPerson)

type User = {
 readonly _id:string
  name:string,
  email:string,
  isActive:boolean,
  cardDetails?:string
}

const newUser : User = {
  _id:"hello",
  name:"Prabadhya",
  email:"Hey",
  isActive:false
}

newUser.name = "Harshit"

type cardNumber = {
  cardno:number
}

type cardDate = {
  cardDate:number
}

type cardDetails = cardDate & cardNumber & {
  cardCVV:number,
  optionalDetails?:[]
}

// Tuples
// Tuplees are for predefined and structured ordered data.
let mainUsers: [string,number,boolean] = ["Prabadhya07",1,false]

// const createNewUser = (user:User) => {
  

// }

// Interfaces

interface registeredUser {
  readonly _id:number,
  email:string,
  userId:number,
  googleId?:string,
  // startTrial:() => string
  startTrial():string,
  getCoupon(couponName:string):number

}

const prabadhya:registeredUser = {
  _id:421,
  email:"Prabadhya@gmail.com",
  userId:123,
  startTrial:() => {
    return "Trial Started"
  },
  getCoupon:(name:"off10")=> {
    return 10
  }
}

interface Admin extends registeredUser {
  role:0|1|"admin"
}

const specialUser: Admin ={
   _id:421,
  email:"Prabadhya@gmail.com",
  userId:123,
  startTrial:() => {
    return "Trial Started"
  },
  getCoupon:(name:"off10")=> {
    return 10
  },
  role:0
}

console.log(specialUser.role)


// Classes Public and Private

// class UserDetails {
//   email:string
//   name:string
//   private readonly city:string = "Indore"
//   constructor(email:string,name:string) {
//     this.email = email
//     this.name = name
//   }
// }

// Getters and Setters

class UserDetails {
  protected _coursecount = 1
  private readonly city:string = "Indore"
  constructor(
    public email:string,
    public name:string
  ) {

  }
  get getEmail(): string{
    return `${this.email}@gmail.com`
  }

  get courseCount():number {
    return this._coursecount
  }

  set courseCount(courseNum) {
    this._coursecount = courseNum
  } 
}

class subUser extends UserDetails{
  isFamily:boolean = true
  changeCourseCount(num:number) {
    this._coursecount = num
  }

}

class TakePhoto {
  constructor(
    public cameraMode:string,
    public filter:string
    ) {

  }
}

const newPic = new TakePhoto("Panorama","Black & White")

class Instagram extends TakePhoto {

}

const harshit = new UserDetails("Prabadhya","Harshit");

console.log(harshit.getEmail)


// Generics

function identity<Type>(arg:Type):Type {
  return arg
}

const helloWorldString = identity<string>("Hello world");
const newNumber = identity<number>(4)

console.log(helloWorldString,newNumber)


function indentityTwo<T>(val:T):T{
  return val
}

indentityTwo("Hello")

function getSearchProducts<T>(arg:T[]):T{

  // Do Some Operations
  const myIndex = 3

  return arg[myIndex]
}

const getMoreSearchProducts = <T>(arg:T[]):T => {
  return arg[1]
}


// Generic Classes 

interface Quiz {
  name:string,
  type:string
}

interface Course {
  name:string,
  author:string,
  subject:string
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products:T) {
    this.cart.push(products)
  }
}




export {};
