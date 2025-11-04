let car={
name:"BMW",
cost:34789,
milage:12,
Start:function(){
    console.log("Car is started");
},
Stop:function(){
    console.log("Car is stopped");
},

Accelerate:function(){
    console.log("Car is accelerated");
}
};
console.log(car.name)
car.Stop();



//passed to functions -----> (1)
function exmp(c1)
{
    console.log(c1);
}



//Stored in variable -------->(2)
let c1=
{
    name : "Audi",
    cost : 789,
    milage : 8.9
};

exmp(c1);
console.log(c1);


//Returned from functions ---------(3)

function example1(){
    let c2={
        name : "Skoda",
        cost: 12345,
        miliage: 7.8
    };

    return c2;
}

console.log(example1());




//functions in javaScript are Objects 


function add(a,b){
    console.log(a+b);
}

console.log(add.name); ///------>add
console.log(add.length); //----->2 (parameters)


add(20,30);

 let add2;
 add2=add;
add2(100,200);



//Higher -Order Functions


// 🧠 What is a Higher-Order Function in JavaScript?

// A Higher-Order Function (HOF) is a function that either:
// ✅ Takes another function as an argument, or
// ✅ Returns another function as its result.

//💡 Why it matters

// JavaScript treats functions as first-class citizens —
// meaning functions can be:

// Stored in variables

// Passed as arguments

// Returned from other functions

// This makes higher-order functions possible (and super powerful).


function A(fun){
    fun(10,20);
}


//call back function
// 🧠 What is a Callback Function?

// A callback function is a function that you pass as an argument to another function,
// and it gets called (executed) inside that other function.


function multiplication(a,b){
    console.log(a*b);
}

A(multiplication);