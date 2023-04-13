const { NotImplementedError } = require('../extensions/index.js');

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
  let strToRepeat = str;
  let addition = "";
  let additionSeparator = options.additionSeparator || '|';

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof options.addition !== 'string' && options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if(typeof options.additionRepeatTimes === "number" && !isNaN(options.additionRepeatTimes)){
    addition = new Array(options.additionRepeatTimes).fill(options.addition).join(additionSeparator);
  } else if (options.additionRepeatTimes === undefined) {
    if(options.addition !== undefined){
      addition += options.addition;
    } 
  }

  strToRepeat = str + addition;
  
  let result = new Array(options.repeatTimes).fill(str + addition);
 

  let separator = options.separator || "+";

  return result.join(separator);
}

module.exports = {
  repeater
};
