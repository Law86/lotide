// eqObjects code here
const eqObjects = function(object1, object2) {

  const arr1 = Object.keys(object1)
  const arr2 = Object.keys(object2)
  if (arr1.length !== arr2.length) {
      return false;
  }
  for (const key of arr1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key])) {
              continue;
          } else {
              return false;
          }
      }
      if (object1[key] === object2[key]) {
          continue;
      } else {
          return false;
      }
  }
  return true;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
      return false;
  } else {
      for (let i = 0; i < arrayOne.length; i++) {
          if (arrayOne[i] !== arrayTwo[i]) {
              return false;
          }
      }
  }
  return true;
};

// New code here

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!(eqObjects(actual, expected))) {
      console.log(`Solution Failed ${inspect(actual)} === ${inspect(expected)}`)
  } else {
      console.log(`Solution Passed ${inspect(actual)} === ${inspect(expected)}`)
  }
};

assertObjectsEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});