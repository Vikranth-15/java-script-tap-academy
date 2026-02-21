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



let sum1=(a,b) => a+b;

let isEqual=(a,b) => a===b;

console.log(isEqual(3,4));


console.log(sum1(100,200))

console.log(sum1(22,33))


let greet=(name) => `${name}`

let greet1=name =>`${name}`

let square=(n) => n*n 

let square1= n => n*n;


let sayHi= () => "Hello";
console.log(sayHi())

console.log(square1(25));

console.log(square(30));

console.log(greet("Vikky"));

console.log(greet1("Hari"));



// Returning objects 

let CreateUser=(name) =>
    {
        return{
            firstName:name
        }
        
}

console.log(CreateUser("Vikky"))

//output { firstName: 'Vikky' }

let CreateProfile=() => {firstName:"Vikky"};
console.log(CreateProfile())                //undefined


let CreateProfile1=(name) => ({firstName:name});
console.log(CreateProfile1("Vikky"))  