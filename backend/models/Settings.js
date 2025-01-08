const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    preference: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Settings', settingsSchema);