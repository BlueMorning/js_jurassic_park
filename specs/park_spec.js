const assert        = require("assert");
const Park          = require("../Park.js");
const Dinosaur      = require("../Dinosaur.js");


describe("Park", function(){
    
    let park;
    let dinausaur1;
    let dinausaur2;
    let dinausaur3;
    
    beforeEach(function(){
        
        park       = new Park("Jurassic Park");
        dinausaur1 = new Dinosaur("Triceratops", 4);
        dinausaur2 = new Dinosaur("Velociraptor", 1);
        dinausaur3 = new Dinosaur("Velociraptor", 3);
    })
    
    it("should have a name", function() {
        
        assert.strictEqual(park.getName(), "Jurassic Park")
    })
    
    
    it("should have an enclosure", function() {
        
        assert.strictEqual(park.getDinosaurCount(), 0);
    })
    
    it("should be able to add a dinosaur", function (){
        
        park.addDinosaur(dinausaur1);
        assert.strictEqual(park.getDinosaurCount(), 1);
    })
    
    it("should be able to remove the dinosaurs of a particular type", function(){
        
        park.addDinosaur(dinausaur1);
        park.addDinosaur(dinausaur2);
        park.addDinosaur(dinausaur3);
        
        park.removeDinosaurByType("Velociraptor");
        
        assert.strictEqual(1, park.getDinosaurCount());
        
    })
    
    it("should be able to get all the dinosaurs whose offspring is greater than X", function() {
        
        park.addDinosaur(dinausaur1);
        park.addDinosaur(dinausaur2);
        park.addDinosaur(dinausaur3);
        
        let dinosaurByOffSpring = park.getDinosaurByOffSpring(2);
        assert.equal(2, dinosaurByOffSpring.length);
    })
    
    
    it("should be able to calcultate the population of dinosaur in X years", function() {
        
        park.addDinosaur(dinausaur1);
        park.addDinosaur(dinausaur2);
        park.addDinosaur(dinausaur3);
        
        assert.strictEqual(129, park.calculateDinosaurPopulationInXYears(3));
        
    })
    
})