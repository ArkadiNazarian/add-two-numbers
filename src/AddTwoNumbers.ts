export function add_two_numbers(first_array: Array<number>, second_array: Array<number>): Array<number> {

    let sum_array: Array<number> = [];
    let division: number = 0;
    let max_array: Array<number> = [];
    let min_array: Array<number> = [];
    let flag: boolean = true;

    if (first_array.length !== second_array.length) {
        max_array = first_array;
        min_array = second_array;
        if (second_array.length > max_array.length) {
            max_array = second_array;
            min_array = first_array;
        }
        for (let index = 0; index <= max_array.length - min_array.length; index++) {
            min_array.push(0);
        }

    }

    for (let index = 0; index < max_array.length; index++) {
        let sum = max_array[index] + min_array[index];

        if (sum > 9) {
            let number_of_max_array = sum % 10;
            division = Math.floor(sum / 10);

            max_array[index + 1] = max_array[index + 1] + division;
            sum_array.push(number_of_max_array);

        } else {
            sum_array.push(sum);
        }
    }

    console.log(sum_array)
    return sum_array;
}



