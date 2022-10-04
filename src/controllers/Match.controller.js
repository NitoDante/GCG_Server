const matchCtrl = {}

const Match = require('../models/Match');

matchCtrl.getMatches = async(req,res) => {
    let Matches = "";
    var game = req.query.game;
    var fDate = req.query.fDate;
    var season = req.query.season;
        var populateQuery = [{path:'homeTeam', select:['name', 'iconURL']}, {path:'visitorTeam', select:['name', 'iconURL']}];

        if(fDate){
            console.log('linea 32 '+fDate);
            console.log('linea 33 '+typeof fDate);
            console.log('linea 34 '+fDate.substring(0,4),fDate.substring(5,7),fDate.substring(8,10));
            Matches = await Match.find({matchDate: {$gte:fDate},game:game,season:season}).populate(populateQuery).sort({'matchDate':'asc'})
        }else{
            Matches = await Match.find({matchDate: {$gte:new Date()},game:game,season:season}).populate(populateQuery).sort({'matchDate':'asc'})
        }
        let query = {matchDate:{$gte:new Date()}};
        
        res.json(Matches);
}
matchCtrl.getMatch = async (req,res) => {
        const match = await Match.findById(req.params.id);
        res.send(match);
}
matchCtrl.getSeasons = async(req,res) => {
    var game = req.query.game;
    Match.distinct('season',{game:game},function(error,result){
        if(!error){
            res.json(result);
        }else{
            res.json('No hay temporadas');
        }
    });
    
}
module.exports = matchCtrl;