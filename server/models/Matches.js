const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
    match_id:{
        type: Number,
        required: false
    },
    username:{
        type: String,
        required: false
    },
    user_id:{
        type: Number,
        required: false
    },
    mapName:{
        type: String,
        required: false
    },
    agent:{
        type: String,
        required: false
    },
    gun: {
        type: String,
        required: false
    },
    kills: {
        type: Number,
        required: false
    },
    deaths: {
        type: Number,
        required: false
    },
    comments:{
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("matches", MatchSchema);