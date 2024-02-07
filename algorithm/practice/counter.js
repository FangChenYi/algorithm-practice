let arr1 = [4, 8, 11, 17, 19, 22];
let arr2 = [6, 3, 18, 22, 4, 17, 8];
let counter = {}; // Computed property names 動態計算屬性名
let result = [];

function counterHandler(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    for (let i = 0; i <= arr3.length - 1; i++) {
        if (!counter[arr3[i]]) {
            counter[arr3[i]] = 1;
        } else {
            counter[arr3[i]]++;
        }
    }


    for (let i in counter) {
        if (counter[i] >= 2) {
            result.push(i)
        }
    }

    return result;
}

console.log(counterHandler(arr1, arr2));