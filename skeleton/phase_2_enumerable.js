
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i ++) {
    callback(this[i]) // => 1() => error 
  };

}


Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
}

Array.prototype.myReduce = function(callback, initiaValue) {
  if (this.length === 0) {
    return undefined;
  }
  let checkFirstElement = false;
  let acc = this[0];
  if (initiaValue) {
    acc = initiaValue;
    checkFirstElement = true;
  } 

  this.myEach(function(el){
    if (!initiaValue && checkFirstElement === false) {
      checkFirstElement = true;
    } else {
      acc = callback(acc, el);
    }
  });
  return acc 

}


