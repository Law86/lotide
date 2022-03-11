const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

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
    } else console.log(`😒😒😒 Assertion Failed: ${actual} !== ${expected}`);

}

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))