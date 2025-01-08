const Feedback = require('../models/Feedback');

//Create a new feedback
const createFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const feedback = new Feedback({name, email, message});
        await feedback.save();
        res.status(201).json({message: 'Feedback created successfully', feedback});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});

    }
}

//Get all feedback
const getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.json(feedback);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Edit feedback
const editFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({message: 'Feedback not found'});
        }
        const { name, email, message } = req.body;
        feedback.name = name;
        feedback.email = email;
        feedback.message = message;
        await feedback.save();
        res.json({message: 'Feedback updated successfully', feedback});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Delete feedback
const deleteFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({message: 'Feedback not found'});
        }
        await feedback.remove();
        res.json({message: 'Feedback deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createFeedback, getFeedback, editFeedback, deleteFeedback };