const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const teamSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    games: {
        type: Array,
        unique: false,
        required: true
    },
    winsLOL: {
        type: Number,
        unique: false,
        required: false
    },
    losesLOL: {
        type: Number,
        unique: false,
        required: false
    },
    winsValo: {
        type: Number,
        unique: false,
        required: false
    },
    losesValo: {
        type: Number,
        unique: false,
        required: false
    },
    logo: {
        type: Buffer,
        contentType:String
    },
    description: {
        type: String,
        contentType:String
    },
    players:[
        {
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
            games:{
                type: Array,
                unique: false,
                required: true
            }
        }
    ]
},{
    timestamps: true,
    versionKey : false
})

const Team = model('Team', teamSchema);
module.exports = Team;