const Message = require('../models/Message');

//Create a new message
const createMessage = async (req, res) => {
    try {
        const message = new Message({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await message.save();
        res.status(201).json({message: 'Message sent successfully', message});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Get all messages
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Get a single message
const getMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({message: 'Message not found'});
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Update a message
const updateMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({message: 'Message not found'});
        }
        message.name = req.body.name || message.name;
        message.email = req.body.email || message.email;
        message.message = req.body.message || message.message;
        await message.save();
        res.status(200).json({message: 'Message updated successfully', message});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Delete a message
const deleteMessage = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({message: 'Message not found'});
        }
        await message.remove();
        res.status(200).json({message: 'Message deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createMessage, getMessages, getMessage, updateMessage, deleteMessage };

