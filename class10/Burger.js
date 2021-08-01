class Burger{

    // bproperties outside if  the constructor.
    bread_top = 'Bread with some seeds on it';
    bread_bottom = 'Just a plain bread';

   
    order(meat_in, salad_in, cheese_in){
        this.meat = meat_in;
        this.salad = salad_in;
        this.cheese = cheese_in;
    }

   serve (){
       console.log('Here is your Burger:');
       console.log('');
       console.log(this.bread_top);
       console.log(this.salad);
       console.log(this.cheese);
       console.log(this.meat);
       console.log(this.bread_bottom);

   }

}

module.exports = Burger;