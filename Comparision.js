// (==) EQUALITY OPERATOR

//(===) STRICT EQUALS TO OPERATOR


let a=16;
console.log(a==16);  // true 

let b=17;
console.log(b==20)  // false 


let u1="vikky";
let u2="vikky";
console.log(u1==u2);   //true 


let a1= "ABCD";
let a2 ="ABCDD";
console.log(a1==a2);   //false 



// Special test cases 

console.log(5 == '5');    //true 

//String to number 

console.log(5 == Number('5'));  //true 

//both are same the implicit type conversion takes place by the compiler 

// In js implicit conversion  also known as Type coercion 

// compare the type and values (===)

console.log(5==='5');        //false 

console.log(true === 1)     // false 



// Null and Undefined 

console.log(null==undefined )    //true 

// if strict not used null and undefined treated as same 


console.log(null===undefined )    //false 


//Empty String and zero 

console.log(''==0);     //true

//When empty staring converts in to a number is always is zero (0)


console.log(''=== 0);   //false


//Boolean and empty string 
console.log(false==  '');       //true

console.log(false === '')     // false 



//Null and false

console.log(null==false);       //false  


//Undefined and Zero 

console.log(undefined== 0);  //false 


//Not a Number 

console.log(NaN == NaN);    //false

console.log(NaN === NaN);   //false 

//Numbers and String Numbers 

console.log('001'==1);         //tre
console.log('010'==10);        //true


//Number and Null 

console.log(0 == null);             //false 
console.log(0 == undefined);        //false