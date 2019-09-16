const expect = require("chai").expect;
const adderFunc = require("../index");

console.log(adderFunc(2,4))

describe("adderFunc", function() {
    it("should add properly when passed numbers", function() {
      expect(adderFunc(2,4)).to.equal(6);
    });
  });
  