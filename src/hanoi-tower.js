const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns, n = 3,
    count = 2;
  if (disksNumber == 1) {
    turns = 1;
  } else if (disksNumber == 2) {
    turns = 3;
  } else if (disksNumber >= 3) {
    while (count != disksNumber) {
      n = (2 * n) + 1;
      turns = n;
      count++;
    }
  }
  let speed = Math.floor((turns / turnsSpeed) * 3600)
  let obj = {
    turns: turns,
    seconds: speed
  }
  return (obj);
}

module.exports = {
  calculateHanoi
};