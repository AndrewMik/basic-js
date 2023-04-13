const { NotImplementedError } = require('../extensions/index.js');

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
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = JSON.parse(JSON.stringify(arr));

  let controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ];
  
  for(let i = 0; i < result.length; i++){
    switch(result[i]){
      case "--discard-next":
        if(!controls.includes(result[i+1])){
          if(result[i+1] !== undefined){
            result.splice(i, 2, "undefined");
          } else {
            result.splice(i, 1, "undefined");
          }
        }
        break;
      case "--discard-prev":
        if(!controls.includes(result[i-1])){
          if(result[i-1] !== undefined){
            result.splice(i-1, 2, "undefined");
          } else {
            result.shift();
          }
        }
        break;
      case "--double-next":
        if(!controls.includes(result[i+1])){
          result[i] = result[i+1];
        }
        break;
      case "--double-prev":
        if(!controls.includes(result[i-1])){
          result[i] = result[i-1];
        }
        break;
    }
  }

  return result.filter(element => element !== undefined && element !== "undefined");
}
 


module.exports = {
  transform
};
