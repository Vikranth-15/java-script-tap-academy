function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}


function calclator(a,b,callback)
{
    return callback(a,b);
}

console.log(mul(10,20));
console.log(add(10,20));

console.log(calclator(6,5,add));


// 🧩 1. Callback Functions
// 🔹 Definition:

// A callback function is a function that is passed as an argument to another function and is executed later (called back) inside that function.

// It’s called a callback because it “calls back” after something happens — like a task finishing, data loading, or a delay completing.


function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Vikky", sayGoodbye); 

//output----->
//       Hello, Vikky
//       Goodbye!




// 2. Higher-Order Functions (HOF)
// 🔹 Definition:

// A higher-order function is a function that takes another function as an argument or returns a function as a result.

// So, callback functions are often used with higher-order functions.



function higherOrder(func) {
  console.log("Before executing the callback");
  func(); // executing the callback
}

function sayHello() {
  console.log("Hello World!");
}

higherOrder(sayHello);


// output----->
//     Before executing the callback
//     Hello World!