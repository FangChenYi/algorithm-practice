let arr = [3, 1, 4, 5, 9, 2, 6, 8, 7];

function linearSearch(arr, n) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == n) {
      return `index: ${i}`;
    }
  }
  return "not defined.";
}

console.log(linearSearch(arr, 4));
