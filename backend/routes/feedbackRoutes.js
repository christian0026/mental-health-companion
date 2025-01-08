const express = require('express');
const { createFeedback, getFeedback, editFeedback, deleteFeedback } = require('../controllers/feedbackController');
const router = express.Router();

//Route to create feedback
router.post('/', createFeedback);

//Route to get all feedback
router.get('/', getFeedback);

//Route to edit feedback
router.put('/:id', editFeedback);

//Route to delete feedback
router.delete('/:id', deleteFeedback);

module.exports = router;
