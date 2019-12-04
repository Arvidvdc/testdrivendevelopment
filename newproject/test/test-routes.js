const   supertest   = require("supertest"),
        assert      = require('assert'),
        app         = require("../index");
    
describe("get route '/'", ()=> {
    it("should have status 200", function(done){
        supertest(app)
        .get("/")
        .expect(200)
        .end(function(err,res){
            if (err) done(err);
            done();
        });
    });
});