
//Strings in javaScript created in three ways

//(1)------->Using Double quotes
let s1="Vikky";


//(2)------>Using Single quotes 
let s2='hello';


//(3)--------->using backtics   for string templates 
let s3=`Ram`;

let res=`Hello ${s3}`;

console.log(res);


let userInput="    Vikky vikranth   |   VIKKY@gmal.com    |  javaScript developer and coffee enthusiat";

let parts=userInput.split("|");

console.log(parts);

let name=parts[0].trim();

console.log(parts[0]);

console.log(name);

console.log(name.toUpperCase());

let bio=userInput[2];
bio=bio.trim();

let likesJS=bio.indexOf('javaScript');

console.log(likesJS);


bio=bio.replace("javaScript,","js");
console.log(bio.replace("javaScript,","js"));
