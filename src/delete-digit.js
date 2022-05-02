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
function deleteDigit(num) {
  let n = 0, temp, arr = [];
  num = num.toString();
  while(n < num.length){
      temp = num;
      temp = temp.split('');
      temp[n] = "";
      arr.push(+(temp.join('')));
      n++;
  }
  return(Math.max(...arr));
}

module.exports = {
  deleteDigit
};
