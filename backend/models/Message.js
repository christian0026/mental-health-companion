const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    messageText: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Message', messageSchema);