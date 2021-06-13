const num = 170;
let result = 1;
let n = num;
while(n >= 1){
    result *= n;
    n--;
}
console.log('factorial of', num,'= ', result);

/*

n! = n * (n-1) * (n-2) *..... *3 *2 *1 = n * (n-1)!

(n-1)! = (n-1) * (n-2)* ......*3 *2 *1 = (n-1) * (n-2)!

*/