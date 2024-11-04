let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let arr2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24,
  25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let count = 0;

  while (min <= max) {
    count++;
    let middle = Math.floor((min + max) / 2);
    console.log(middle);
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else {
      console.log(`執行次數: ${count}`);
      return `index: ${middle}`;
    }
  }

  console.log(`執行次數: ${count}`);
  return "Not Found.";
}

console.log(binarySearch(arr, 3));
