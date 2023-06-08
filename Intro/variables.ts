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

export {};
