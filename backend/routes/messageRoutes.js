const express = require('express');
const { createMessage, getMessages, updateMessage, deleteMessage } = require('../controllers/messageController');

//Route to create a new message
router.post('/', createMessage);

//Route to get all messages
router.get('/', getMessages);

//Route to get a single message
router.get('/:id', getMessage);

//Route to update a message
router.put('/:id', updateMessage);

//Route to delete a message
router.delete('/:id', deleteMessage);

module.exports = router;