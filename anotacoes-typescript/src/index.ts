// string, boolean, number, ...
let x: number = 10;

x = 20;

console.log(x);

// inferencia x anotation
let y = 12;

let z: number = 12; //ambos reconhecem que é um number, mas cuidado na hora de usar

//tipos
let firstName: string = "Kalil";
let age: number = 24;
const isAdmin: boolean = true;

console.log(firstName);
console.log(age);
console.log(isAdmin);

//String != string  lembrar que objeto é diferente do tipo

// object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());

myNumbers.push(5);

console.log(myNumbers);

//tuplas -> tuple
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

console.log(myTuple);

//object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Kalil",
    age: 24,
};

console.log(user);

console.log(user.name);

//any -> aceita qualquer tipo
let a: any = 0;

// union type
let id: string | number = "10";

console.log(id);

id = 200;

console.log(id);

// type alias
type myIdType = number | string
const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

//enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);


// literal types -> quando você coloca um valor, em vez de tipo, chamando a variavel


//funções
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));

function sayHelloTo(name: string): string{
    return `Hello ${name}`;
}

console.log(sayHelloTo("Kalil"));

function logger(msg: string):void{
    console.log(msg);
}

logger("Testei!");

function greeting(name: string, greet?: string){ //essa interrogação coloca a variável greet como opcional
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    } else {
        console.log(`Olá ${name}`)
    }
}

greeting("José");
greeting("José", "Sir");

//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2}));

function multiplyNumbers (nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 7, n2: 2}));


//narrowing - checagem de tipo
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

//generics
function showArrayItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItems(a1);
showArrayItems(a2);


//classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

//interfaces em classe
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void{
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();


//herança
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);
a4.showBrand();


//decorators
function BaseParamters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createAt = new Date();
        };
    };
}

@BaseParamters()

class Person{
    name
    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);