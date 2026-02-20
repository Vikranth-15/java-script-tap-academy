function displayGreeting(displayName){
    console.log("hello");
    displayName();
    console.log("How are you?");
}

// displayGreeting(function()

// {
//     console.log("Ram");
// });

function displayVikky(){
    console.log("Vikky");
}

let displayRam=function(){
    console.log("Ram");
}

displayGreeting(displayRam);

//displayGreeting(displayVikky);