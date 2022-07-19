"use strict";
// string, boolean, number, ...
let x = 10;
x = 20;
console.log(x);
// inferencia x anotation
let y = 12;
let z = 12; //ambos reconhecem que é um number, mas cuidado na hora de usar
//tipos
let firstName = "Kalil";
let age = 24;
const isAdmin = true;
console.log(firstName);
console.log(age);
console.log(isAdmin);
//String != string  lembrar que objeto é diferente do tipo
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
//tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
console.log(myTuple);
//object literals -> {prop: value}
const user = {
    name: "Kalil",
    age: 24,
};
console.log(user);
console.log(user.name);
//any -> aceita qualquer tipo
let a = 0;
// union type
let id = "10";
console.log(id);
id = 200;
console.log(id);
const userId = 10;
const productId = "00001";
const shirId = 123;
//enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
// literal types -> quando você coloca um valor, em vez de tipo, chamando a variavel
//funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Kalil"));
function logger(msg) {
    console.log(msg);
}
logger("Testei!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("José");
greeting("José", "Sir");
