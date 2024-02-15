let arr = [-18, -11, 0, 1, 2, 3, 9, 14, 17, 21];
let avg = 1.5;
let result = [];

function pointer(arr, avg) {
  let j = arr.length - 1;
  for (let i = 0; i <= arr.length - 2; i++) {
    while ((arr[i] + arr[j]) / 2 > avg && j > i) {
      j--;
    }
    if ((arr[i] + arr[j]) / 2 == avg) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

console.log(pointer(arr, avg));
