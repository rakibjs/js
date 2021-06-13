class Car{

    greetings = 'your car details: ';

    constructor (color, type){
        this.color = color;
        this.type = type;
    }

    showDetails(){
        console.log(this.greetings);
        console.log(this.color);
        console.log(this.type);
    }


}

const blueSUV = new Car('blue', 'SUV');
const blackSedan = new Car('black', 'Sedan');

blueSUV.showDetails();
blackSedan.showDetails();




