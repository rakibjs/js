const obj = {
    'name': 'Mark',
    'age' : 25,
    'nationality': 'English',
    'job': 'Banker',
}



arr = [1,2,3,4];

// for (let i = 0; i <4; i++){
//     console.log(obj[i]);
// }

// for (key in obj){
//     console.log(obj[key]);
// }

// for (i of arr){
//     console.log(i);
// }

arr.push(5);

arr.forEach(element => {
    console.log(element);
});