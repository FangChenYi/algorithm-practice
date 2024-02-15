let arr = [2, 7, 3, 0, 6, 1, -5, -12, -11];

function maxSum(arr, n) {
  let max = -Infinity;

  if (n > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - n; i++) {
    let attempt = 0;
    for (let j = i; j < i + n; j++) {
      attempt += arr[j];
    }
    if (attempt > max) {
      max = attempt;
    }
  }
  return max;
}

function maxSumOpt(arr, n) {
  let max = 0;

  if (n > arr.length) {
    return null;
  }

  for (let i = 0; i <= n - 1; i++) {
    max += arr[i];
  }

  let temp = max;
  for (let j = n; j <= arr.length - 1; j++) {
    temp = temp + arr[j] - arr[j - n];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSum(arr, 3));
console.log(maxSumOpt(arr, 3));
