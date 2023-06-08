const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const sum = numbers.reduce((acc, currentVal) => {
  return acc + currentVal
}, 0)

console.log(sum)

/* 
  - If no initial value is provided, the first element of the array will be used as the initial accumulator value, and the reducer will start with the second element.

  - Reducer can also take the current index and the original array as third and fourth arguments.

  - The accumulator argument holds the return value of the reducer function from the previous iteration.

  - When using reduce to calculate the sum of array elements, you don't need to define a separate sum variable. The accumulator within the reducer function does the job of keeping track of the running total as reduce iterates over the array. The final value of the accumulator is the result of the reduce operation.
*/
