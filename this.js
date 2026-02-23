let car={
    "Brand":"Audi",
    "Color":"white",
    start:function(){
        console.log(this);
    }
}

car.start();

// output 

//{ Brand: 'Audi', Color: 'white', start: [Function: start] }



//Regular Function 
// this  window object

function start(){
    console.log(this);
}

//start();


// let car1={
//     "Brand":"BMW",
//     "Color":"White",
//     start:function(){
//         setTimout(function(){
//             console.log("Started")
//         },1000);
//     }
// }

// car1.start();   //ReferenceError: setTimout is not defined



let car2={
    "Brand":"BMW",
    "Color":"White",
    start:function(){
        setTimeout(function(){
            console.log("Started")
        },1000);
    }
}

//car2.start(); 


console.log(this);

let car3={
    "Brand":"BMW",
    "Color":"White",
    start:()=>{
    console.log(this);
    }
};

car3.start(); 