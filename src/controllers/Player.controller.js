const playerCtrl = {}

const Player = require('../models/Player');

playerCtrl.getPlayers = async(req,res) => {
    const Players = await Player.find();
    res.json(Players);
}
playerCtrl.getPlayer = async (req,res) => {
    //Player.findOne({_id:req.params.id});
    const player = await Player.findById(req.params.id);
    res.send(player);
}
/*playerCtrl.createPlayer = async (req,res) => {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.send({message: 'Player created'});
}*/

/*playerCtrl.editPlayer = async (req,res) => {
    await Player.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Player updated'});
}

playerCtrl.deletePlayer = async (req,res) => {
    await Player.findByIdAndDelete(req.params.id);
    res.json({status: 'Player Deleted'});
}*/

module.exports = playerCtrl;