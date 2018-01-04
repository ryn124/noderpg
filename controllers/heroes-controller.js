var Hero = require("../models/hero");
var Weapon = require("../models/weapon");
var Armor = require("../models/armor");

var heroes = [];
var heroId = 0;
var armorId = 0;
var weaponId = 0;

heroes.push(new Hero(heroId++, "A Hero", 100, 100, new Weapon(weaponId++, "sword", 5, 10), new Armor(armorId++, "cloth", 5)));
heroes.push(new Hero(heroId++, "Some Hero", 100, 100, new Weapon(weaponId++, "sword", 5, 10), new Armor(armorId++, "cloth", 5)));
heroes.push(new Hero(heroId++, "Another Hero", 100, 100, new Weapon(weaponId++, "sword", 5, 10), new Armor(armorId++, "cloth", 5)));

function index(req, res){
  res.json(heroes)
};
function show(req, res){
  var id = req.params.id;
  console.log(id);
  for (var i = 0; i < heroes.length; i++){
    if(id == heroes[i].id){
      res.status(200).json(heroes[i])
      return;
    }
  }
  res.status(404).json({error: "No hero was at ID" + id})
};
function create(req, res){
  console.log("Hero has arrived");
  var body = req.body;
  console.log(body);
  heroes.push(new Hero(heroId++, body.name, body.strength, body.health,
    body.weapon
    //, new Weapon(weaponId++, "sword", 5, 10), new Armor(armorId++, "cloth", 5)
));
  res.json(heroes);
};
function update(req, res){
  var id = req.params.id;
  var body = req.body;
  console.log(id);
  console.log(body);
  for (var i = 0; i < heroes.length; i++){
    if(id == heroes[i].id){
      console.log(heroes[i])
      heroes.splice(i, 1);
      heroes.push(new Hero(id, body.name, body.strength, body.health, new Weapon(body.weapon.id, body.weapon.name, body.weapon.minDmg, body.weapon.maxDmg), new Armor(body.armor.id, body.armor.name, body.armor.absorb)));
      res.status(200).json(heroes);
      return;
    }
  }
  res.status(404).json({error: "No hero was at ID " + id})

};
function destroy(req, res){
  var id = req.params.id;
  console.log(id);
  for (var i = 0; i < heroes.length; i++){
    if(id == heroes[i].id){
      heroes.splice(i, 1);
      res.status(200).json(heroes);
      return;
    }
  }
  res.status(404).json({error: "No hero was at ID" + id})
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}