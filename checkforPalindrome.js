function checkforPalindrome(str) {
  let mainStr = str;
  let reverseStr = str.split("").reverse().join("");
  if (mainStr === reverseStr) {
    return "The string is a palindrome";
  }
  {
    return "The string is not a palindrome";
  }
}
console.log(checkforPalindrome("hello"));
