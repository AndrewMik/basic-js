const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  n = n.split("-");

  if(n.length === 6){
    let flag = true;
    
    n.forEach(number => {
      if(!isHex(number)){
        flag = false;
      }
    });

    if(flag){
      return true;
    }
  }

  return false;
}

function isHex(num) {
  return Boolean(num.match(/^[0-9a-f]+$/i))
}

module.exports = {
  isMAC48Address
};
