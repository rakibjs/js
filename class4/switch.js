const flower = 'rose';
const colors = {
    100: 'red',
    180: 'white',
    255: 'black',
};

const num = 50;

switch ( num ){
   
    case 100 : console.log('your rose is', colors['100']);
        break;
    
    case 180: console.log('your rose is', colors['180']);
        break;
    
    case 255 : console.log('your rose is', colors['255']);
        break;

    default: console.log('the color you have chosen is not found');
}

