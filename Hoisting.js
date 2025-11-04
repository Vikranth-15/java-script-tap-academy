


let av;  // declaration

av=100;  // Initialization 

console.log(av);   // 100 



//Hoisting --->  The process of moving declarations to the top of program 

// console.log(b);
// let b=200;          

//  gives error Reference Error 


// Var Keyword 

//When you declare a variable not assigned any value it stored as default value 

let c;
console.log(c);    // output----> undefined 

var cc;
console.log(cc);    // output----> undefined 



console.log(b);
var b=100;      // output ---->  Undefined 


// Var key word Hosisting 


console.log(c1);     // Output ----> undefined
var c1=100;
console.log(c1);     //  Output ----> 100


// let keyword 

console.log(c2);     // Output ----> Reference Error  not initialized
let c2=100;
console.log(c2);     //  Output ----> Reference Error 



// What is Hoisting?

// Hoisting means JavaScript moves declarations to the top of their scope (before the code executes) — so you can use functions or variables before you actually declare them in your code.

// In short:

//         “Declarations are hoisted, not initializations.”


console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5


//Hoisting 
var a1;
console.log(a1); // undefined (a is declared but not assigned yet)
a1 = 5;
console.log(a1); // 5



// Example 2: let and const are also hoisted — but differently!
// console.log(x); // ❌ ReferenceError
// let x = 10;


// 🧠 Why error?
// Because let and const are hoisted but kept in a "temporal dead zone" (TDZ) until the line where they are declared.
// You can’t access them before that point.

// So:

// var → hoisted and initialized as undefined

// let and const → hoisted but not initialized (accessing before declaration gives an error)


// Function Hoisting:
// Example 3: Function Declaration
// sayHello(); // ✅ Works fine

// function sayHello() {
//   console.log("Hello!");
// }


// ✅ Works! Because function declarations are completely hoisted — the entire function definition moves to the top.

// Example 4: Function Expression
// sayHi(); // ❌ TypeError

// var sayHi = function() {
//   console.log("Hi!");
// };


// 🧠 Why?
// Because only the variable sayHi is hoisted (as undefined), not the function itself.
// So when you call it, it’s like doing:

// var sayHi;
// sayHi(); // sayHi is undefined ⇒ TypeError

// 🪄 Summary Table
// Type	Hoisted?	Initialized?	Can be used before declaration?
// var	✅ Yes	✅ As undefined	⚠️ Yes, but gives undefined
// let	✅ Yes	❌ No	❌ ReferenceError
// const	✅ Yes	❌ No	❌ ReferenceError
// Function Declaration	✅ Yes	✅ Full definition	✅ Yes
// Function Expression	✅ Yes (variable only)	✅ As undefined	❌ TypeError
// 🧩 Visual Analogy

// Imagine JavaScript scans your code twice:

// First pass (Memory creation): It finds all declarations (var, let, const, function) and sets them up.

// Second pass (Execution): It runs the code line by line.

// So hoisting happens in the first pass.

// 🏁 In Simple Words

//     Hoisting means JavaScript “lifts up” all declarations (but not assignments) to the top of the scope, so you can technically use them before they appear in your code — but only safely for function declarations and var.
