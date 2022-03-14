const assertEqual = require('./assertEqual'); 

const head = function(arr1) {
  if (Array.isArray(arr1)) {
    if (arr1.length > 0) {
      console.log(arr1[0]);
    } else {
      console.log("Undefined");
    }
  }
}

module.exports = head;