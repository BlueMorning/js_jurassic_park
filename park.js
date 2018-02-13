require("./dinosaur.js")

const Park = function(name){
    
    this.name       = name;
    this.enclosure  = [];
}


Park.prototype.getName = function (){
    return this.name;
}

Park.prototype.getDinosaurCount = function (){
    return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur){
    this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function (type){
    let dinosaursWhichRemain = new Array(0);
    for(dinosaur of this.enclosure){
        if(dinosaur.type != type){
           dinosaursWhichRemain.push(dinosaur)
        }
    }
    
    this.enclosure = dinosaursWhichRemain;
}

Park.prototype.getDinosaurByOffSpring = function (offSpring){
    
    let dinosaurOffSpring = new Array(0);
    for(dinosaur of this.enclosure){
        if(dinosaur.getOffSpring() >= offSpring){
            dinosaurOffSpring.push(dinosaur)
           }
    }
    
    return dinosaurOffSpring;
}

module.exports = Park;