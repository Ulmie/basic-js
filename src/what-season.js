const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (!(date instanceof Date)){
    throw new Error('Invalid date!');
  }
  try {
    date.toLocaleTimeString()
  } catch (e) {
    throw new Error('Invalid date!');
  }
  
  let m = Date.prototype.getMonth.call(date);
  return (m > 1 && m <= 4) ? "spring" :
  (m > 4 && m <= 7) ? "summer" :
  (m > 7 && m <= 10) ? "autumn" : "winter";
}

module.exports = {
  getSeason
};
