const assert = require("assert");
const Park   = require("../Park.js");



describe("Park", function(){
    
    let park;
    
    beforeEach(function(){
        park = new Park("Jurassic Park");
    })
    
    it("should have a name", function() {
        assert.strictEqual(park.getName(), "Jurassic Park")
    })
    
    
    it("should have an enclosure", function() {
        assert.strictEqual(park.getDinosaurCount(), 0);
    })
    
})