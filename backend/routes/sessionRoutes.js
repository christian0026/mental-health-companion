const express = require('express');
const { createSession, getSessions, getSessionById, updateSession, deleteSession } = require('../controllers/sessionController');
const router = express.Router();

//Route to create session
router.post('/', createSession);

//Route to get all sessions
router.get('/', getSessions);

//Route to get session by id
router.get('/:id', getSessionById);

//Route to update session
router.put('/:id', updateSession);

//Route to delete session
router.delete('/:id', deleteSession);

module.exports = router;