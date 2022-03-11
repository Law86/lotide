const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
      console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const letterPositions = function(sentence, char) {
  let results = [];
  for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === char) {
          results.push(i)
      }
  }
  return results;
}

assertArraysEqual(letterPositions("hello","e"), [1]);