function sameFrequency(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let counter1 = {};
    let counter2 = {};

    if (arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i <= arr1.length - 1; i++) {
        if (!counter1[arr1[i]]) {
            counter1[arr1[i]] = 1;
        } else {
            counter1[arr1[i]]++;
        }
    }

    for (let i = 0; i <= arr2.length - 1; i++) {
        if (!counter2[arr2[i]]) {
            counter2[arr2[i]] = 1;
        } else {
            counter2[arr2[i]]++;
        }
    }

    console.log(counter1, counter2);


    for (let i in counter1) {
        if (!counter2[[i]]) {
            return false;
        }
        if (counter1[i] !== counter2[i]) {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency("abbc", "bbac"));