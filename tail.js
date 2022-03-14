const assertEqual = require('./assertEqual'); 

const tail = function(arr1) {
  if (Array.isArray(arr1)) {
    if (arr1.length > 0) {
      console.log(arr1.slice(0));
    }
  }
};

module.exports = tail;