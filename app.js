// takst number 1
function task1(str) {
  return str.split("").reverse().join("");

  console.log(result);
}
// takst number 2

console.log(task1("hello"));

function task2(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(task2("programmingaoio"));

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
function task4(arr) {
  return Math.max(...arr);
}

console.log(task4([5, 1, 9, 3]));

// task number 5

function task5(arr) {
  return [...new Set(arr)];
}

// Example
console.log(task5([1, 2, 2, 3, 4, 4]));

// task number 6
function task6(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(task6([1, 2, 3, 4]));

// task number 7
function task7(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(task7([1, 2, 3, 4, 5, 6]));

// task number 8
function task8(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(task8("hello world"));

// task number 9
function task9(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(task9(5));
// task number 10
function task10() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
task10();
