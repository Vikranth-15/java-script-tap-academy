
//camel case notation 
function createCar(brand,color){
    return{
        brand:brand,
        color:color,
        start:function(){
            console.log("Car started");
        }
    };
}

//Short Hand Notation 
function createCar1(brand,color){
    return{
        brand,
        color,
        start:function(){
            console.log("Car started");
        }
    };
}

let val=createCar("Tata","White");
let val1=createCar("BMW","blue");
let val2=createCar("Audi","White");
console.log(val);
console.log(val1);
console.log(val2);

//-------- output 
// { brand: 'Tata', color: 'White', start: [Function: start] }
// { brand: 'BMW', color: 'blue', start: [Function: start] }
// { brand: 'Audi', color: 'White', start: [Function: start] }

let val3=createCar1("Tata","White");
console.log(val3);
// ------- output 
//{ brand: 'Tata', color: 'White', start: [Function: start] }