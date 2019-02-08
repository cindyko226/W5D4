"use strict";

Array.prototype.uniq = function() { 
  const result = [];
  for(let i = 0 ; i < this.length ; i++) {
    if(!result.includes(this[i])) {
      result.push(this[i])
    }
  } 
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for (let i = 0; i < this.length - 1; i ++) {
    for (let j = i + 1; j < this.length; j ++) {
      if ((this[i] + this[j]) === 0) {
        result.push([i, j]);
      }
    }
  }
  return JSON.stringify(result);
};

Array.prototype.transpose = function() {

  const result = [];
  for (let j = 0; j < this[0].length; j ++){
    const row = []
    for (let i = 0; i < this.length; i ++) {
      row.push(this[i][j]);
    }
    result.push(row)
  }
  return result;
};


