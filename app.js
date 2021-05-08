// ES5 Map Callback
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

// double([2,3,4]); //[4, 6, 8]

// ES2015 Arrow Functions Shorthand
const double = (arr) => arr.map(val => val *2);
double([2,3,4]); //[4, 6, 8]



// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

const squareAndFindEvens = (numbers) => {
   let squares = numbers.map(num => num * 2)
   let evens = squares.filter(square => square % 2 === 0);
   return evens;
}

squareAndFindEvens([1,3,6,7,8,9,10])

