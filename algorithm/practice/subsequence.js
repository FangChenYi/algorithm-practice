console.log(isSubsequence("book", "broaoklyn"));
console.log(isSubsequence("apple", "apeipigle"));
console.log(isSubsequence("cba", "abc"));

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  if (str1.length > str2.length) {
    return false;
  }

  while (pointer2 <= str2.length - 1) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 == str1.length - 1) {
      return true;
    }
    pointer2++;
  }

  return false;
}
