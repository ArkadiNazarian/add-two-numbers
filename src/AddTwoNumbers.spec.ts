import { add_two_numbers1 } from './AddTwoNumbers1';

describe('Add two numbers', () => {

    test("it shoud return [6,3,5]", () => {
        // given => act
        const first_array: Array<number> = [5, 2, 3];
        const second_array: Array<number> = [9, 1, 2];
        // when => arrange
        // const result = add_two_numbers(first_array, second_array);
        const result = add_two_numbers1(first_array, second_array);
        // then => assert
        const target: Array<number> = [4, 4, 5];
        expect(result).toStrictEqual(target);
    })
    test.only("it shoud return [6,3,5]", () => {
        // given => act
        const first_array: Array<number> = [9,9,9,9,9,9,9];
        const second_array: Array<number> = [9,9,9,9 ];
        // when => arrange
        // const result = add_two_numbers(first_array, second_array);
        const result = add_two_numbers1(first_array, second_array);
        // then => assert
        const target: Array<number> = [8,9,9,9,0,0,0,1];
        expect(result).toStrictEqual(target);
    })

    //        1
    //     [7,2,3]
    //   + [5,1,8]
    //   = [2,4,1]

    //    [1,2,4]
    //   +[1,3]
    //   =[2,5,4]

});