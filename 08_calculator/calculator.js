const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a) {
	// let sum = 0
  // for(let num of a) {sum += num}
  // return sum
  return a.reduce((sum, num)=> sum + num,0)
};

const multiply = function(a) {
  return a.reduce((sum, num) => sum * num, 1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let sum = 1
  for (let i = 2; i <= a; i++) {
    sum *= i
  }
  return sum

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
