const assertEqual = require('./assertEqual'); 

const head = function(arr1) {
  if (Array.isArray(arr1)) {
    if (arr1.length > 0) {
      return(arr1[0]);
    } else {
      return("Undefined");
    }
  }
}

module.exports = head;