const limit = 100;
const primes= [];

for(let i = 0; i<= limit; i++){
    if(isPrime(i)){
        primes.push(i);
    }
}
console.log(primes);



function isPrime (n){
    if(n == 1){
        return false;
    }else if(n > 1){
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
                break;
            } 
        }
        return true;
    } else{
        return false;
    }
}

