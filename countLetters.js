const sentence = "lighthouse in the house";

const countLetters = function(string) {
    const object = {}
  for (const letter of string){
  if (letter !== " ") {
    if (object[letter]) {
    object[letter] += 1;
  } else {
    object[letter] = 1;
  }
}
  }
  return object
}

// step 1 - declare empty object
// step 2 - create key value pairs for every letter
// step 3 - add one to every matching letter that is duplicated if the key exists already, else set it to 1
// step 4 - return object

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);
    
};

console.log(countLetters(sentence));