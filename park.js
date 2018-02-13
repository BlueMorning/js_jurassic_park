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



module.exports = Park;