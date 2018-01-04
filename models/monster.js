var Monster = function(id, name, health, strength){
  this.id = id;
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.type = "monster";
}

module.exports = Monster;