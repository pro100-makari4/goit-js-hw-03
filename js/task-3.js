'use strict';

function filterArray(numbers, value) {
  return numbers.filter(iterator => iterator > value);
}

console.log(filterArray([1, 2, 3, 4, 5], 3).join(', ')); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4).join(', ')); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5).join(', ')); // []
console.log(filterArray([12, 24, 8, 41, 76], 38).join(', ')); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20).join(', ')); // [24, 41, 76]
