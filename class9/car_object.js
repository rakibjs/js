const Car = require('./Car');

const blueSUV = new Car('blue', 'SUV');


class MiniCar extends Car {

    set capacity (car){
        return car;
    }
    

}


const redmini = new MiniCar('red', 'sedan');

redmini['capacity'] = 2;


