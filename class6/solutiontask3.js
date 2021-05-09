
for ( let year = 2021; year <= 2041; year++){

    let feb = (year % 4 == 0) ? 29 : 28 ;

    console.log(year, ' :');
    console.log('jan,mar,may,jul,aug,oct,dec : 31');
    console.log('Feb : ', feb);
    console.log('apr,jun,sep,nov : 30');
}