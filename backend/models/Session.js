const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: 
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    startTime: 
    {
        type: Date, 
        required: true
    },
    endTime: 
    {
        type: Date, 
        required: true},
    sessionType: {
        type: String, 
        required: true
    }, 
    
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;