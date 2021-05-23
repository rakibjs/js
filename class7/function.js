const first_name = 'David';
const last_name = 'Müler';

const first_name_1 = 'christine';
const last_name_2 = 'Stivenson';


console.log(full_name(first_name, last_name));
console.log(full_name(first_name_1, last_name_2));

function full_name (fname, lname){
    return  fname + ' ' + lname;
}