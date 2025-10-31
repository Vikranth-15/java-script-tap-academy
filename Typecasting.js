let a=123
console.log(a);
console.log(typeof(a));
let b=String(a);
console.log(b);
console.log(typeof(b));


// output-->
//     123
//     number
//     123
//     string

//Special case 

let num="Vikky"/2;
console.log(typeof(num));
console.log(num)

// output --->
//     string
//     number
//     NaN


let s="123xyz";
console.log(s);
console.log(typeof(s));
let i=parseInt(s);
console.log(i);
console.log(typeof(i));

// output--->
//     123xyz
//     string
//     123
//     number

let ss="12y3xyz";
console.log(ss);
console.log(typeof(ss));
let ii=parseInt(ss);
console.log(ii);
console.log(typeof(ii));


// output --->
//     12y3xyz
//     string
//     12
//     number


let str="y 234u"
console.log(str);
console.log(typeof(str));

let nu=parseInt(str);
console.log(nu);
console.log(typeof(nu));

// output --->
//     y 234u
//     string
//     NaN
//     number


let Special=" 234 u"
console.log(Special);
console.log(typeof(Special));

let number=parseInt(Special);
console.log(number);
console.log(typeof(number)); 

// output--->
//     234 u
//     string
//     234
//     number

//Boolean to number 
// Other than zero in numbers like positive,negative,positive infinity,negative infinity are treated as true(1) in boolean 
//  1
//  789
//  -678
//  678909
//-567890098767845678987456


//Zero is treated as false 

let five =Infinity         // five ==-234345
console.log(five);
console.log(typeof(five));
let res=Boolean(five);
console.log(res);
console.log(typeof(res));

// output --->   i/p Infinity          // output ---> i/p = -234545          
//     Infinity                         //-234545
//     number                           //number 
//     true                              //true 
//     boolean                           //boolean



let zero=0;
console.log(zero);
console.log(typeof(zero));
let bol=Boolean(zero);
console.log(bol);
console.log(typeof(bol));

// output ---->
//     0
//     number
//     false
//     boolean



// Strings to boolean 
// if String is empty literal ""    gives   ---> false 

//[3,4,6,7] --->true

//[]-----> false 

// otherwise gives   ----> true 

let name= "vikky";
console.log(typeof(name));
console.log(name);
let strToBool=Boolean(name);
console.log(strToBool);
console.log(typeof(strToBool));


// output --->
//         string
//         vikky
//         true
//         boolean  


let nam="";
console.log(nam);
console.log (typeof(nam));

let resut=Boolean(nam);
console.log(resut);
console.log(typeof(resut));

// output -->
//        //empty string 
//     string
//     false
//     boolean

