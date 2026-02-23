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



function add(a,b,c){
    return a+b+c;
}

function add(...arr){
    let sum=0;
    for(let el of arr){
        sum+=el;
    }
    console.log(sum);
}

let arr=[1,2,3,4,5,6];
add(...arr);


let[a7,b7,c7]=[1,2,3];
console.log(a7);
console.log(b7);
console.log(c7);

let[a1,...arr1]=[1,2,3,4,5];
console.log(a1);
console.log(arr1);


//Default parameter 
function sum1(a2=3, b2=8){
    console.log(a2);
  console.log(b2);
}

sum1(99,66);

//Function Declaration
function add(a,b){
    return a+b;
}

console.log(add(3,4));


//Function Expression
let summ=function(a,b){
    return a+b;
}

console.log(summ(7,8));