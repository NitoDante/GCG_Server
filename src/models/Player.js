const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const playerSchema = new Schema({
    firstName: {
        type: String,
        unique: false,
        required: true
    },
    lastName: {
        type: String,
        unique: false,
        required: true
    },
    age: {
        type: Number,
        unique: false,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gameTag: {
        type: String,
        unique: true,
        required: true
    },
    team: {
        type: mongoose.Types.ObjectId
    }
},{
    timestamps: true,
    versionKey : false
})

const Player = model('Player', playerSchema);
module.exports = Player;