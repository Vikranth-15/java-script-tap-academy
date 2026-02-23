class Car{
    constructor(name,brand){
        this.name=name,
        this.brand=brand
    }

    displayFullName(){
        return this.name+" "+this.brand;
    }
}

let val=new Car("Mustang Gt","Ford");
console.log(val.displayFullName());
console.log(Car.prototype);
 console.log(val);