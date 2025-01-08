const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },//duration in minutes

});

module.exports = mongoose.model('Exercise', exerciseSchema);