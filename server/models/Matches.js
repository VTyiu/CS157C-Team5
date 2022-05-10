const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
    match_id:{
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    mapName:{
        type: String,
        required: true
    },
    agent:{
        type: String,
        required: true
    },
    gun: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    comments:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("matches", MatchSchema);