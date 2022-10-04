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
    matchDate: {
        type: Date,
        unique: false,
        required: true
    },
    homeScore: {
        type: Number,
        unique: false,
        required: true
    },
    visitorScore: {
        type: Number,
        unique: false,
        required: true
    },
    season: {
        type: String,
        unique: false,
        required: true
    }
},{
    timestamps: true,
    versionKey : false
},{ strictQuery : true } )

const Match = model('Match', matchSchema);
module.exports = Match;