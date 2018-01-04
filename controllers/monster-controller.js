var Monster = require('../models/monster');

var monsters = [];
var monsterId = 0;

monsters.push(new Monster(monsterId++, "Monstaaa", 20, 5));
monsters.push(new Monster(monsterId++, "Monsteeer", 20, 5));
monsters.push(new Monster(monsterId++, "Monstuuh", 20, 5));

function index(req, res) {
  res.json(monsters);
};
function show(req, res) {
  var id = req.params.id;
  console.log(id);
  for (var i = 0; i < monsters.length; i++) {
    if (id == monsters[i].id) {
      res.status(200).json(monsters[i])
      return;
    }
  }
  res.status(404).json({ error: "No monster was at ID" + id })
};
function create(req, res) {
  var body = req.body;
  monsters.push(new Monster(monsterId++, body.name, body.health, body.strength))
};
function update(req, res) {
  var id = req.params.id;
  var body = req.body;
  for (var i = 0; i < monsters.length; i++) {
    if (id == monsters[i].id) {
      monsters.splice(i, 1);
      monsters.push(new Monster(id, body.name, body.health, body.strength))
      res.status(200).json(monsters);
      return
    }
  }
  res.status(404).json({error: "No monster at ID " + id})
};
function destroy(req, res) {
  var id = req.params.id;
  for(var i = 0; i < monsters.length; i++){
    if(id == monsters[i].id){
      monsters.splice(i, 1);
      res.status(200).json(monsters);
      return
    }
  }
  res.status(404).json({error: "No monster at ID " + id})
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}