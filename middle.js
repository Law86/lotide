const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
      return false
  }

  for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
          return false
      }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  let midArray = [];
  if (arr.length === 1 || arr.length === 2) {
      arr.midArray = [];
  } else if (arr.length % 2 === 1) {
      midArray.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
      midArray.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  }
  return midArray;
}

assertEqual
eqArrays
middle([1, 2, 3, 4]) // => [2, 3]