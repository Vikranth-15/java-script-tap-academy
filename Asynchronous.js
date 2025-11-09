




function fun1()
{
    console.log("Fun1 Execution started");
    console.log("Fun1 Execution completed");
}


function fun2()
{
    console.log("Fun2 Execution started");
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    
    while(Date.now()<=end){

    }
    console.log("Fun2 Execution completed");
}


function fun3()
{
    console.log("Fun3 Execution started");
    console.log("Fun3 Execution completed");
}



// fun1();


// setTimeout(fun2,2000);
// fun3();



function f1()
{
    console.log("f1 execution started");
    console.log("f1 execution completed");
}


function f2()
{
    console.log("f2 execution started");
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    while(Date.now()<=end){

    }
    console.log("f2 execution completed");
}

function f3()
{
    console.log("f3 execution started");
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    while(Date.now()<=end){
        
    }
    console.log("f3 execution completed");
}


function f4()
{
    console.log("f4 execution started");
    console.log("f4 execution completed");
}

// f1();
// setTimeout(f2,5000);
// setTimeout(f3,2000);
// f4();


//setInterval

function fun4()
{
    console.log("Fetching data....");
}


let intervalId=setInterval(fun4,2000);

setTimeout(()=> clearInterval(intervalId),10000);



