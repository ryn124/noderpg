var Hero = function(id, name, strength, health, weapon, armor){
  this.id = id;
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.backpack = [];
  this.weapon = weapon;
  this.armor = armor
  this.type = "hero"
}
module.exports = Hero;