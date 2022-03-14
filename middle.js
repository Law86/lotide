const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let midArray = [];
  if (arr.length === 1 || arr.length === 2) {
      arr.midArray = [];
  } else if (arr.length % 2 === 1) {
      midArray.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
      midArray.push(arr[Math.floor(arr.length / 2 - 1)])
      midArray.push(arr[Math.floor(arr.length / 2)]);
  }
  return midArray
}

module.exports = middle;