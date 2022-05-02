const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains === '' || domains === [] || domains === undefined) {
    return ('');
  } else {
    for (let i = 0; i < domains.length; i++) {
      domains[i] = domains[i].split('.').reverse();
    }
    for (let i = 0; i < domains.length; i++) {
      for (let j = 0; j < domains[i].length; j++) {
        domains[i][j] = '.' + domains[i][j];
      }
    }
    for (let i = 0; i < domains.length; i++) {
      for (let j = domains[i].length - 1; j >= 0; j--) {
        let z = j - 1;
        while (z >= 0) {
          domains[i][j] = domains[i][z] + domains[i][j];
          z--;
        }
      }
    }
    let res = {};
    for (let i = 0; i < domains.length; i++) {
      for (let j = 0; j < domains[i].length; j++) {
        res[domains[i][j]] = (res[domains[i][j]] || 0) + 1;
      }
    }
    return (res);
  }
}

module.exports = {
  getDNSStats
};