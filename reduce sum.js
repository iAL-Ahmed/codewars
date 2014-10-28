// Make the sum() function return the sum of the values in the passed 
// in array. Your solution must use the reduce() function of the built-in javascript Array object.

function sum(array) {
  return array.reduce(function(a, b) { return a + b });
}