let some_array = [4, 9, 2, 6, 7, 10, 3, 15, 1, 18, 5, 8, 11, 14, 13,20,19,17,16];

function bubbleSort (unsorted_array){
    for (let j = 0; j < unsorted_array.length; j++){

        for(let i = 0; i < unsorted_array.length; i++){
            let temp;
            if (unsorted_array[i] > unsorted_array[i +1]){
                temp = unsorted_array[i]; 
                unsorted_array[i] = unsorted_array[i +1];
                unsorted_array[i +1] = temp;
            }
        }
    
    }

    return unsorted_array;
}


console.log(bubbleSort(some_array));
