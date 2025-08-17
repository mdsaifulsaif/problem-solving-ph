function task1(str) {
  return str.split("").reverse().join("");

  console.log(result);
}

console.log(task1("hello"));

function task2(str) {
  let mainStr = str;
  let reverseStr = str.split("").reverse().join("");
  if (mainStr === reverseStr) {
    return "The string is a palindrome";
  }
  {
    return "The string is not a palindrome";
  }
}

console.log(task2("hello"));
