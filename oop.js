let vehicle ={
    wheel: 4,
};
let car ={
    seats:5,
    __proto__:vehicle
};
let bmw = {
logo:"bmw",
__proto__:car,
}
console.log(vehicle,vehicle.__proto__)
console.log(car,car.wheel);
console.log(bmw,bmw.seats)
 function Employee(_name,_age, _designation){
    this.age =_age;
    this.name = _name;
    this.designation = _designation;
 }