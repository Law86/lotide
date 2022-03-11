// assertEqual here
const assertEqual = function(actual, expected) {

  if (actual === expected) {
      console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
};

// eqArrays here
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

// My code here
const eqObjects = function(object1, object2) {

  const arr1 = Object.keys(object1)
  const arr2 = Object.keys(object2)
  if (arr1.length !== arr2.length) {
      return false;
  }
  for (const key of arr1) {
      if (Array.isArray(object1[key])) {
          if (eqArrays(object1[key]), object2[key]) {
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

assertEqual(eqObjects({a:1, b:2, c:3}, {a:1, b:2, c:3}), true);
assertEqual(eqObjects({a:1, b:2, c:3}, {a:1, b:3, c:3}), false);