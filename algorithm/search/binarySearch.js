let arr = [4, 8, 11, 17, 19, 22];

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (n > arr[middle]) {
      min = middle + 1;
    }
    if (n < arr[middle]) {
      max = middle - 1;
    }
    if (n == arr[middle]) {
      return `number: ${n}, index: ${middle}`;
    }
  }

  return "Not Found.";
}

console.log(binarySearch(arr, 19));
