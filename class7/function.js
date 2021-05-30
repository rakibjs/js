const first_name = 'David';
const last_name = 'Müller';

const first_name_1 = 'christine';
const last_name_2 = 'Stivenson';

let full_name_person1 = full_name('jason', last_name);

console.log(full_name_person1);
console.log(full_name(first_name_1, last_name_2));

function full_name (fname, lname){
    return  fname + ' ' + lname;
}