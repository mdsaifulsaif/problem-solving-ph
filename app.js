// takst number 1
function task1(str) {
  return str.split("").reverse().join("");

  console.log(result);
}
// takst number 2

// console.log(task1("hello"));

function task2(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// console.log(task2("programmingaoio"));

// takst number 3
function task3(str) {
  let mainStr = str;
  let reverseStr = str.split("").reverse().join("");
  if (mainStr === reverseStr) {
    return "The string is a palindrome";
  }
  {
    return "The string is not a palindrome";
  }
}

console.log(task3("hello"));

// takst number 4
