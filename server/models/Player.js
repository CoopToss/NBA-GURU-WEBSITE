const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    position: { type: String, required: true },
    stats: { type: Object, required: true },
    socialMedia: { type: Object, required: true },
    highlights: { type: [String], required: true }
});

module.exports = mongoose.model('Player', PlayerSchema);