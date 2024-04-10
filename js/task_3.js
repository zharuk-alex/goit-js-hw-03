function filterArray(numbers, value) {
  const acc = [];
  for (const num of numbers) {
    if (value < num) {
      acc.push(num);
    }
  }
  return acc;
}

const onelineSolution = (numbers, value) => numbers.filter(num => value < num);

console.log('%c task_3:', 'color:blue;');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
