const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('@');
  email[1] = email[1].replace('.un', '');
  return (email[1])
}

module.exports = {
  getEmailDomain
};