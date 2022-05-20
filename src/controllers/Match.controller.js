const matchCtrl = {}

const Match = require('../models/Match');

matchCtrl.getMatches = async(req,res) => {
    var game = req.query.game;
    var populateQuery = [{path:'homeTeam', select:['name', 'iconURL']}, {path:'visitorTeam', select:['name', 'iconURL']}];
    const Matches = await Match.find({game:game}).populate(populateQuery).sort({'matchDate':'asc'})
    console.log(JSON.stringify(Matches));
    res.json(Matches);
}
matchCtrl.getMatch = async (req,res) => {
    //Player.findOne({_id:req.params.id});
    const match = await Match.findById(req.params.id);
    res.send(match);
}

module.exports = matchCtrl;