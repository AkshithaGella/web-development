//functions

// function myfun(num1,num2){
//     return num1-num2
// }
// console.log(myfun(1,2))

// //var let const

// var a=10
// var a=20
// console.log(a)
// // var is used to reasign the value


// let a=10
// let a=20
// console.log(a)
// //is shows identifier already asign


// const a=10
// const a=20
// console.log(a)
// //Identifier 'a' has already been declared
// //it shows like this


let num1=10
let num2=20
op='+'
switch (op){
    case"+":
        console.log(num1+num2)
        break;
    case "-":
        console.log(num1-num2)
        break;
    case "*":
        console.log(num1*num2)
        break;
    default:
        console.log('invalid')
        break;

}

//types of functions

1. Function Declaration
A normal function defined using the function keyword.

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
Features
Can be called before declaration (hoisting).
Reusable and common type.


2. Function Expression
Function stored inside a variable.
JavaScript
const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));
Features
Cannot be called before definition.
Useful for dynamic functions.


3. Arrow Function
Short syntax introduced in ES6.
JavaScript
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));
Shorter version:
JavaScript
const add = (a, b) => a + b;
Features
Short and clean syntax.
Mostly used in modern JavaScript.


4. Anonymous Function
Function without a name.
JavaScript
setTimeout(function() {
    console.log("Hello");
}, 1000);
Features
Used as callback functions.
Temporary usage.


5. Immediately Invoked Function Expression (IIFE)
Runs immediately after creation.
JavaScript
(function() {
    console.log("Executed immediately");
})();
Features
Executes only once.
Avoids global variable conflicts.


6. Callback Function
Function passed as an argument to another function.
JavaScript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye");
}

greet("Akshita", bye);
Features
Used in asynchronous programming.


7. Recursive Function
Function calling itself.
JavaScript
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
Features
Useful for mathematical problems.


8. Constructor Function
Used to create objects.
JavaScript
function Person(name) {
    this.name = name;
}

const p1 = new Person("Akshita");
console.log(p1.name);
Features
Creates multiple objects.


9. Generator Function
Can pause and resume execution.
JavaScript
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const num = numbers();

console.log(num.next().value);
Features
Used in iterators.


10. Async Function
Used for asynchronous operations.
JavaScript
async function fetchData() {
    return "Data received";
}

fetchData().then(console.log);




Features
Works with await.
Used in API calls.
Quick Summary
Function Type
Purpose
Function Declaration
Normal reusable function
Function Expression
Function stored in variable
Arrow Function
Short syntax
Anonymous Function
No name
IIFE
Runs immediately
Callback Function
Passed as argument
Recursive Function
Calls itself
Constructor Function
Creates objects
Generator Function
Pause/resume execution
Async Function
Handles asynchronous tasks