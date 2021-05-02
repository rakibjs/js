let leapYear = [];

for (let i = 2021; i <= 2041; i++){
    if(i % 4 == 0){
        leapYear.push(i);
    }
}

console.log(leapYear);