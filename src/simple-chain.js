const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let positionIndex = position-1;

    if(positionIndex >= 0 && positionIndex < this.chain.length) {
      this.chain.splice(positionIndex, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error (`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let endChain = this.chain.join('~~')
    this.chain = [];
    return endChain;
  }
};

module.exports = {
  chainMaker
};
