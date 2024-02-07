let arr1 = [4, 8, 11, 17, 19, 22];
let arr2 = [6, 3, 18, 22, 4, 17];
let result = [];

function intersection(arr1, arr2) {
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

console.log(intersection(arr1, arr2));