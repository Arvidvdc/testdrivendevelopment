const   convert = require("../app"),
        assert  = require("assert");
        

describe("Temperature Conversion", ()=>{
    describe("cToF", ()=>{
        it("should convert -40 celsius to -40 farenheit", ()=>{
            assert.equal(-40, convert.cToF(-40));
        });
        it("should convert 0 celsius to 32 farenheit", ()=>{
            assert.equal(32, convert.cToF(0));
        });
        it("should return undefined", ()=>{
            assert.equal(undefined, convert.cToF("fout"));
        });
        it('should return undefined if no temperature is input', function(){
            assert.equal(undefined, convert.cToF(''));
        });
    });

    describe("fToC", ()=>{
        it("should convert -40 farenheit to -40 celsius", ()=>{
            assert.equal(-40, convert.fToC(-40));
        });
        it("should convert 32 farenheit to 0 celsius", ()=>{
            assert.equal(0, convert.fToC(32));
        });
        it("should return undefined", ()=>{
            assert.equal(undefined, convert.fToC("fout"));
        });
        it('should return undefined if no temperature is input', function(){
            assert.equal(undefined, convert.fToC(''));
        });
    });
});
