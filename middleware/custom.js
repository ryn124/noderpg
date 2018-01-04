var Weapon = require("../models/weapon");

function isHero(req, res, next){
  if(req.body.type == "hero"){
    console.log("Herrooo")
    next();
  }
  else {
    res.json({message: "You are posting monsters into the hero's db."})
  }
}

function isMonster(req, res, next){
  if(req.body.type == "monster"){
    console.log("monstuhh")
  }
  else{

  }
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomWeapon(req, res, next){
  var weapon = new Weapon(req.body.weapon.id, "Sword of Randomness", getRandomInt(1, 5), getRandomInt(5,20));
  console.log(weapon)
  console.log(req.body.weapon)
  req.body.weapon = weapon;
  console.log(req.body.weapon);
  next();
}
function capName(req, res, next){
  console.log("cap name running")
  var name = req.body.name;
  req.body.name = toTitleCase(name);
  console.log(req.body.name);
  next();
}
module.exports = {
  isHero: isHero,
  isMonster: isMonster,
  capName: capName,
  randomWeapon: randomWeapon
}
