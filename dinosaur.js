const Dinosaur = function (type, offspring){
    this.type       = type;
    this.offspring  = offspring;
}


Dinosaur.prototype.getType = function (){
    return this.type;
}

Dinosaur.prototype.getOffSpring = function (){
    return this.offspring;
}



module.exports = Dinosaur;