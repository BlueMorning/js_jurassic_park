const assert    = require("assert");
const Dinosaur  = require("../Dinosaur.js");


describe("Dinosaur", function() {
    
    let dinosaur;
    
    
    beforeEach(function (){
        dinosaur = new Dinosaur("Triceratops", 2);
    });
    
    
    it("should have a type", function() {
        assert.strictEqual(dinosaur.getType(), "Triceratops");
    });
    
    it("should have an offspring", function(){
        assert.strictEqual(dinosaur.getOffSpring(), 2);
    })
    
    
})

