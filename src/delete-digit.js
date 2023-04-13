const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let highestNumber = 0;
  let arr = n.toString().split("");
  let arrayToCheck;
  let numberToCheck;

  for(let i = 0; i < arr.length; i++){
    arrayToCheck = [...arr];
    arrayToCheck.splice(i, 1);
    numberToCheck = +arrayToCheck.join("");

    if(highestNumber < numberToCheck){
      highestNumber = numberToCheck;
    }
  }

  return highestNumber;
}

module.exports = {
  deleteDigit
};
