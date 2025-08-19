function findTheEvenNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(findTheEvenNumber([1, 2, 3, 4, 5, 6]));
