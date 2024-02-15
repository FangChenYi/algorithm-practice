console.log(isPalindrome("levellevel"));
// console.log(isPalindrome("awesome"));
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("noon"));

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
