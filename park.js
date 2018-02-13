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



module.exports = Park;