const teamCtrl = {}

const Team = require('../models/Team');

teamCtrl.getTeams = async(req,res) => {
    const Teams = await Team.find();
    res.json(Teams);
}
teamCtrl.getTeam = async (req,res) => {
    //Player.findOne({_id:req.params.id});
    const team = await Team.findById(req.params.id);
    res.send(team);
}
/*teamCtrl.createTeam = async (req,res) => {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.send({message: 'Team created'});
}*/

/*teamCtrl.editTeam = async (req,res) => {
    await Team.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Team updated'});
}

teamCtrl.deleteTeam = async (req,res) => {
    await Team.findByIdAndDelete(req.params.id);
    res.json({status: 'Team Deleted'});
}*/

module.exports = teamCtrl;