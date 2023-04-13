const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};

  domains.forEach( domain => {
    let DNS = domain.split(".").reverse();

    DNS.forEach( (dns, index) => {
      let path = "";
      let pathIndex = 0;
      
      while(pathIndex <= index){
        path += `.${DNS[pathIndex]}`;
        pathIndex++;
      }

      if(result.hasOwnProperty(path)){
        result[path] += 1;
      } else {
        result[path] = 1;
      }
    })
  })

  return result;
}

module.exports = {
  getDNSStats
};
