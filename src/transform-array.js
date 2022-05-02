const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  let d_n = '--discard-next';
  let d_p = '--discard-prev';
  let db_n = '--double-next';
  let db_p = '--double-prev';

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === d_p) {
      arr[i - 1] && newArr.pop();
    } else if (arr[i] === d_n) {
      arr[i + 1] && i++ && newArr.push('');
    } else if (arr[i] === db_p) {
      arr[i - 1] && newArr.push(newArr[newArr.length - 1]);
    } else if (arr[i] === db_n) {
      arr[i + 1] && newArr.push(arr[i + 1]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr.filter((item) => item != '');
}

module.exports = {
  transform
};