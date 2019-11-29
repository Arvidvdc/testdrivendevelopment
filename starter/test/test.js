var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', ()=>{
    describe("Test one", ()=>{
        it("should return 9", ()=>{
            assert.equal(9,3*3);
        });
    });
    describe("Test two", ()=>{
        it("should return -8", ()=>{
            assert.equal(-8,(3-4)*8);
        });
    });
});

describe("Fun", ()=>{
    it("let 'be' should be fun",()=> {
        let be="yes"
        assert.equal("yes",be);
    });
});