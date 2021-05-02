const num = 446484654540;

const divisor = 7;
//let division = num % 5;

if( (num % divisor) == 0){
    console.log(num + ' can be devided by divisor');
} else {
    console.log(num % divisor);
    console.log(num + ' can not be devided by divisor');
}