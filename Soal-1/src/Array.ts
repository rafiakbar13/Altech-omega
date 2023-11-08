
export const sortArray = (arr: number[]) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
};

console.log(sortArray([-4, 1, 0, 5, 2, 3, 4, 6, 7, 8, 9, 10]));