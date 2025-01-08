const Session = require('../models/Session');

//Create a session
const createSession = async (req, res) => {
    try {
        const { userId, startTime, endTime, sessionType } = req.body;
        const session = new Session({userId, startTime, endTime, sessionType});
        await session.save();
        res.status(201).json({message: 'Session created successfully', session});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});

    }
};

//Get all sessions
const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
};

//Get session by id
const getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
};

//Update session
const updateSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: 'Session updated successfully', session});
    }
    catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Delete session
const deleteSession = async (req, res) => {
    try {
        await Session.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Session deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createSession, getSessions, getSessionById, updateSession, deleteSession };




