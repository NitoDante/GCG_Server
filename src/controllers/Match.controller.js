const matchCtrl = {}

const Match = require('../models/Match');

matchCtrl.getMatches = async(req,res) => {
    var populateQuery = [{path:'homeTeam', select:['name', 'iconURL']}, {path:'visitorTeam', select:['name', 'iconURL']}];
    const Matches = await Match.find().populate(populateQuery).sort({'matchDate':'asc'})
    res.json(Matches);
}
matchCtrl.getMatch = async (req,res) => {
    //Player.findOne({_id:req.params.id});
    const match = await Match.findById(req.params.id);
    res.send(match);
}

module.exports = matchCtrl;