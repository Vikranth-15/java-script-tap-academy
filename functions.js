let a=100;
let b=200;


//function declaration
function add(){
    let c;
    c=a+b;

    console.log(c);
}
// function calling 
add();


let aa=(x,y) =>{
    return x+y;
}

let sum=(x,y) => x+y;
// arrow functions


console.log(aa(1000,2000));

console.log(sum(10,20));


//Immediately Invoking Function Expression
(function(){
    console.log("Immediately Invoked Function Expression");
})();




//Function Expression

let sub=function(x,y){
    return x-y;
}

let subb=sub(2000,1000);
console.log(subb);  //output ---> 1000




