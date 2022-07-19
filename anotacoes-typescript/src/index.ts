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