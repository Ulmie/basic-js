const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  s1 = Array.from(s1);
  s2 = Array.from(s2);
  for(let i = 0; i < s1.length; i++){
      for(let j = 0; j < s2.length; j++){
          if(s1[i] === s2[j]){
              res++;
              s2[j] = '';
              j = s2.length;
          }
      }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
