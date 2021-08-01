class Car{

    greetings = 'your car details: ';

    constructor (color, type){
        this.color = color;
        this.type = type;
    }

    showDetails(){
        console.log('I am runnunbg from Car class.')
        console.log(this.greetings);
        console.log(this.color);
        console.log(this.type);
    }
}

module.exports = Car;





