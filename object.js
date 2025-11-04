let car={
name:"BMW",
cost:34789,
milage:12,
Start:function(){
    console.log("Car is started");
},
Stop:function(){
    console.log("Car is stopped");
},

Accelerate:function(){
    console.log("Car is accelerated");
}
};
console.log(car.name)
car.Stop();