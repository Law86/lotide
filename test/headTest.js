const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assertEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assertEqual(head(['5']), '5'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']",  () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
});