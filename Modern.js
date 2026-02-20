let arr=[1,2,3];
console.log(arr);
let arr1=[...arr];
console.log(arr1);

let person={
    "name":"Vikky",
    "age":23,
    "color":"White"
}

let ravi={...person,"City":"Hyderabad"};
console.log(ravi);

let address={"city":"pune","pincode":234566};
let personDetails={...person,...address};
console.log(personDetails);
