const Car = require('./Car');




class MiniCar extends Car {

   constructor (color, type, capacity){
       super(color, type);
       this.capacity = capacity;
   }

   showDetails(){
    console.log('I am running from Minicar class')
    console.log(this.greetings);
    console.log(this.color);
    console.log(this.type);
    console.log(this.capacity);
   }
}

// object of sub class
const redmini = new MiniCar('red', 'sedan', 2);
console.log('output of the method showDetails of Sub class')
redmini.showDetails();

// an object of main class
const blueSUV = new Car('blue', 'SUV');
console.log('output of the method showDetails of Main class')
blueSUV.showDetails();
