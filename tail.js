const tail = function(arr1) {
  if (Array.isArray(arr1)) {
      if (arr1.length === 0) {
          return null;
      } else {
          return arr1.slice(-1)[0]
      }
  }
};


module.exports = tail;