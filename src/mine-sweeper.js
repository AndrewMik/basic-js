const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let result = JSON.parse(JSON.stringify(matrix));;

  matrix.forEach( (array, index) => {
    for(let i = 0; i < array.length; i++){
      let minesCounter = 0;

      if(array[i-1] === true){
        minesCounter++;
      } 
      
      if(array[i+1] === true){
        minesCounter++;
      } 
      
      if(matrix[index-1] !== undefined && matrix[index-1][i] === true){
        minesCounter++;
      } 

      if(matrix[index-1] !== undefined && matrix[index-1][i-1] === true){
        minesCounter++;
      } 

      if(matrix[index-1] !== undefined && matrix[index-1][i+1] === true){
        minesCounter++;
      } 

      if(matrix[index+1] !== undefined && matrix[index+1][i] === true){
        minesCounter++;
      }

      if(matrix[index+1] !== undefined && matrix[index+1][i-1] === true){
        minesCounter++;
      }

      if(matrix[index+1] !== undefined && matrix[index+1][i+1] === true){
        minesCounter++;
      }

      result[index][i] = minesCounter;
    }
  })

  return result;
}

module.exports = {
  minesweeper
};
