const tail = require('../tail');
const assert = require('chai').assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']",  () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs"); 
  });
});