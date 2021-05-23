const num = 170;
let result = 1;
let n = num;
while(n >= 1){
    result *= n;
    n--;
}
console.log('factorial of', num,'= ', result);