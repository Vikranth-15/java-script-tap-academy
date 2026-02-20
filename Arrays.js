let arr1=["Vikky",5.11,72,6,true,"Ram"];

console.log(arr1);      //[ 'Vikky', 5.11, 72, 6, true, 'Ram' ]


//Dynamic array
let arr=new Array(5);
arr[0]=11;
arr[1]=22;
arr[2]=33;
arr[3]=44;
arr[4]=55;

for(let i=0;i<5;i++){
console.log(arr[i]);   //[ 11, 22, 33, 44, 55 ]
}



//For 0f Loop 

for(let j of arr){
    console.log(j);
}

//Add Element in last push()

arr.push(89);
console.log(arr);   //-----> [ 11, 22, 33, 44, 55, 89 ]

// Add Element at begining of array unshift()

arr.unshift(1);
console.log(arr);   //[1, 11, 22, 33,44, 55, 89]

//Removing  last element 
let x=arr.pop();
console.log(x);       //89
console.log(arr);    //[ 1, 11, 22, 33, 44, 55 ]




//remove first Element shift()

let y=arr.shift();
console.log(y);       //1
console.log(arr);    //[ 11, 22, 33, 44, 55 ]


//splice(startIndex,deleteCount,items) 

let remove=arr.splice(2,1);
console.log(remove);           // 33

console.log(arr);               //[ 11, 22, 44, 55 ]



//Add element int array using splice
arr.splice(2,0,77);
console.log(arr);           //[ 11, 22, 77, 44, 55 ]


//Searching element in ana array 
//arr.indexOf(element)                 ----> gives first Ocuurence
//arr.lastIndexOf(Element)          ------>gives last occurnce of element


let a=arr.indexOf(77);
console.log(a);             //2 

console.log(arr.lastIndexOf(77));           //2


//Element is present or not in an array 
//ar.includes(Element)---------------> gives true or false 


//Map function in js

let num=[1,4,9,16,25,36,49];


let res=num.map((x) => Math.sqrt(x));

console.log(num);
console.log(res);


//Filter ----->filteration happens from original array and gives result new array

let ages=[32,15,19,12];

function checkAge(x)
{
    if(x>18){
        return true;
    }
    else{
        return false;
    }
}

let res1 =ages.filter(checkAge);
console.log(res1);                  //[ 32, 19 ]


let res2 =ages.filter((x)=>
{
    if(x>18){
        return true;
    }
    else{
        return false;
    }
});

console.log(res2);        // //[ 32, 19 ]





///Reduce function gives number as an output 


let num1=[1,4,9,16];

let res3 =num1.reduce((total,x) => total + x ,0);

console.log(res3);          //30



//Some method 
//Return true or false if any element has satisfied the condition 

let score=[85,72,90,67];

let gradeA=score.some((x) => x>85);


console.log(gradeA); 


//every method 
//Return true or false if all element has satisfied the condition 

let hasPassed=score.every((x)=> x>=50);
console.log(hasPassed);                 //true

console.log(score.sort());              //[ 67, 72, 85, 90 ]


// 1. find() Method
// 📘 Definition:

// The find() method returns the first element in an array that satisfies a given condition (callback function).
// If no element matches, it returns undefined.

// 🧠 Syntax:
//             array.find(callback(element, index, array), thisArg)



// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.find(num => num > 25);

// console.log(result); // ✅ Output: 30




// 2. findIndex() Method
// 📘 Definition:

// The findIndex() method returns the index of the first element that satisfies the given condition.
// If no element matches, it returns -1.


// 🧠 Syntax:
// array.findIndex(callback(element, index, array), thisArg)




// const numbers = [10, 20, 30, 40, 50];

// const index = numbers.findIndex(num => num > 25);

// console.log(index); // ✅ Output: 2


//Shallow and deep copy in js




let arr=[1,2,3];
let a=[...arr];
