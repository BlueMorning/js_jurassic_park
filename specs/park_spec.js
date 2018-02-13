const assert        = require("assert");
const Park          = require("../Park.js");
const Dinosaur      = require("../Dinosaur.js");


describe("Park", function(){
    
    let park;
    let dinausaur1;
    
    beforeEach(function(){
        park       = new Park("Jurassic Park");
        dinausaur1 = new Dinosaur("Triceratops", 2)
    })
    
    it("should have a name", function() {
        assert.strictEqual(park.getName(), "Jurassic Park")
    })
    
    
    it("should have an enclosure", function() {
        assert.strictEqual(park.getDinosaurCount(), 0);
    })
    
    it("should be able to add a dinosaur", function (){
        park.addDinosaur(dinausaur1)
        assert.strictEqual(park.getDinosaurCount(), 1);
    })
    
})