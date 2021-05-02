const num = 10;
const num2 = 20; 

// if( num%2 == 0){
//     console.log( num, 'is multiple of 2');
// } else {
//     console.log( num, 'is not multiple of 2');
// }

// (condition) ?  run if the condition is true : run if condition returns false

(num%2 == 0) ? 
    ((num2%4 == 0) ? console.log( num2 , 'is multiple of 4') : console.log( num2 , 'is multiple of 4'), console.log( num, 'is multiple of 2')) 
    : console.log( num, 'is not multiple of 2');