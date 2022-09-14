export function add_two_numbers1(first_array: Array<number>, second_array: Array<number>): Array<number> {

    let max_array: Array<number> = [];
    let min_array: Array<number> = [];
    let add_two_numbers: Array<number> = [];

    if (first_array.length < second_array.length) {
        max_array = second_array;
        min_array = first_array;
    } else {
        max_array = first_array;
        min_array = second_array;
    }

    for (let index = 0; max_array.length > index; index++) {

        let sum = max_array[index] + min_array[index]

        if (sum < 10) {

            add_two_numbers.push(sum)

        } else if (sum >= 10) {
          
            let number_array = Array.from(String(sum), Number);  
            add_two_numbers.push(Number(number_array[1]));

            let number_array_2 = max_array[index + 1] + Number(number_array[0]) + min_array[index + 1];
            add_two_numbers.push(number_array_2);

            // }else{
            //     add_two_numbers.push(Number(number_array[0]))
            //     console.log(number_array[0])
            // }
            index++;
            
        } else if (index >= min_array.length) {
            add_two_numbers.push(max_array[index])
        } else {

        }

    }


    console.log(add_two_numbers)

    return add_two_numbers
}
