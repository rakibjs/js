const num1 = 80;
const num2 = 40;
const ins = '';
let result;

switch(ins){

    case 'add': result = num1 + num2;
        break;

    case 'sub' : result = num1 - num2;
        break;

    case 'div' : result = num1 / num2;
        break;

    case 'mul' : result = num1 * num2;
        break;

    case 'mod': result = num1 % num2;
        break;
    
    default: console.log('Please choose an Operation.');

}

console.log('Result: ', result);