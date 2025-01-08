const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Feedback', feedbackSchema);