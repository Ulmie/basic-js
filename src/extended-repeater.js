const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  if (arguments.length === 1) {
    return res += str;
  }
  if (options.hasOwnProperty('repeatTimes') != true || options.repeatTimes == 1) {
    res += str;
    if (options.hasOwnProperty('addition')) {
      res += options.addition;
    } else {
      res += '';
    }
    let temp = options.additionRepeatTimes;
    options.additionRepeatTimes--;
    while (options.additionRepeatTimes > 0) {
      if (options.hasOwnProperty('additionSeparator')) {
        if (options.additionRepeatTimes >= 1) {
          res += options.additionSeparator;
        }
      } else {
        if (options.additionRepeatTimes >= 1) {
          res += '|';
        }
      }
      res += options.addition;
      options.additionRepeatTimes--;
    }
    options.additionRepeatTimes = temp;
    return res;
  }
  while (options.repeatTimes > 0) {
    res += str;
    if (options.hasOwnProperty('addition')) {
      res += options.addition;
    }
    let temp = options.additionRepeatTimes;
    options.additionRepeatTimes--;
    while (options.additionRepeatTimes > 0) {
      if (options.hasOwnProperty('additionSeparator')) {
        if (options.additionRepeatTimes >= 1) {
          res += options.additionSeparator;
        }
      } else {
        if (options.additionRepeatTimes >= 1) {
          res += '|';
        }
      }
      res += options.addition;
      options.additionRepeatTimes--;
    }
    options.additionRepeatTimes = temp;

    if (options.hasOwnProperty('separator')) {
      if (options.repeatTimes > 1) {
        res += options.separator;
      }
    } else {
      if (options.repeatTimes > 1) {
        res += '+';
      }
    }
    options.repeatTimes--;
  }
  return(res);
}


module.exports = {
  repeater
};