let notPrime = [];
for (let num = 2; num < 50; num++) {

    if (num == 1) {
        console.log('1 is not a prime number')
    } else if (num > 1) {

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                notPrime.push(num);
                break;
            }
        }

    } else {
        console.log('prime numbers are greater than zero and positive')
    }

}

// find out if the number is not in the notPrime list then it will be a prime.
for (let num = 2; num < 50; num++) {

    if(notPrime.includes(num)){
        console.log(num, ' is not prime');
    } else{
    console.log(num, ' is prime');
    }
}