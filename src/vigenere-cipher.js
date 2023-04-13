const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true){
      this.mode = mode;
  }

  encrypt(string, key) {
    if(!string || !key){
      throw new Error("Incorrect arguments!");
    }

    let cypher = "";

    for(let i = 0, j = 0; i < string.length; i++){
      let currentLetter = string[i];
  
      if(this.isUpperCase(currentLetter)){
        let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(upperLetter+65);
        j++;
      } else if(this.isLowerCase(currentLetter)){
        let lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
        cypher += String.fromCharCode(lowerLetter+97);
        j++;
      } else{
        cypher += currentLetter;
      }
    }

    if(this.mode){
      return cypher.toUpperCase();
    } else {
      return cypher.split("").reverse().join("").toUpperCase();
    }
  }

  decrypt(string, key) {
    if(!string || !key){
      throw new Error("Incorrect arguments!");
    }

    let decodedString = "";

    for(let i = 0, j = 0; i < string.length; i++){
      let currentLetter = string[i];
  
      if(this.isUpperCase(currentLetter)){
        let upperLetter = ((currentLetter.charCodeAt() - 65) - (key[j%key.length].toUpperCase().charCodeAt() - 65) + 26) % 26;
        decodedString += String.fromCharCode(upperLetter+65);
        j++;
      } else if(this.isLowerCase(currentLetter)){
        let lowerLetter = ((currentLetter.charCodeAt() - 97) - (key[j%key.length].toLowerCase().charCodeAt() - 97) + 26) % 26;
        decodedString += String.fromCharCode(lowerLetter+97);
        j++;
      } else{
        decodedString += currentLetter;
      }
    }

    if(this.mode){
      return decodedString.toUpperCase();
    } else {
      return decodedString.split("").reverse().join("").toUpperCase();
    }

  }

  isUpperCase(letter){
    letter = letter.charCodeAt();
    if(letter >= 65 && letter <= 90){
      return true;
    } else{
      return false;
    }
  };
  
  isLowerCase(letter){
    letter = letter.charCodeAt();
    if(letter >= 97 && letter <= 122){
      return true;
    } else{
      return false;
    }
  };
}

module.exports = {
  VigenereCipheringMachine
};
