const { use } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let usedFileNames = [];
  
  names.forEach( name => {
    if(!usedFileNames.includes(name)){
      usedFileNames.push(name);
    } else {
      let counter = 1;
      let flag = true;
      do{
        if(!usedFileNames.includes(`${name}(${counter})`)){
          usedFileNames.push(`${name}(${counter})`);
          flag = false;
        }
        counter++;
      } while(flag);
    }
  });

  return usedFileNames;
}

module.exports = {
  renameFiles
};
