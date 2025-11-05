
let a=100;
console.log(a);

function main(){
    console.log(a);
}

main();


///Functions and scope and function chain 

let firstName="Vikky";

function outerFunction()
{
    let outerVar="From outerFunction";

    function innerFunction(){
        let innerVar="From inner function";
        console.log(innerVar);
        console.log(outerVar);
        console.log(firstName);
    }
    innerFunction();

}

outerFunction();