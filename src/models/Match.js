const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const matchSchema = new Schema({
    homeTeam: {
        type: Schema.Types.ObjectId, 
        ref:'Team',
        unique: false,
        required: true
    },
    visitorTeam: {
        type: Schema.Types.ObjectId,
        ref:'Team',
        unique: false,
        required: true
    },
    game: {
        type: String,
        unique: false,
        required: true
    },
    matchData: {
        type: Date,
        unique: false,
        required: true
    }
},{
    timestamps: true,
    versionKey : false
})

const Match = model('Match', matchSchema);
module.exports = Match;