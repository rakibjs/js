// define the marks obtained in different subjects
const math = 80;
const phy = 64;
const che = 50; 
const bio = 64;

let grade = '';

if( math < 0 || math > 100 || phy < 0 || phy > 100 || che < 0 || che > 100 || bio < 0 || bio > 100  ){
    // show error if marks are out of range
    console.log('marks obtained in a subject can not be less than 0 or greater than 100');
} else {
    // calculate average marks
    const avg = ( math + phy + che + bio ) / 4.0 ;
    console.log(avg);

    // grade A if avg mark is 80 or higher
    if( avg >= 80){
        grade = 'A';
    } else if (avg < 80 && avg >= 70) {
        grade = 'B';
    } else if (avg < 70 && avg >= 60) {
        grade = 'C';
    } else if (avg < 60 && avg >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

}

console.log(grade);