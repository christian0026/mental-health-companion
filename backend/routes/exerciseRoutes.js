const express = require('express');
const { createExercise, getExercises} = require('../controllers/exerciseController');
const router = express.Router();

//Route to create exercise
router.post('/', createExercise);

//Route to get all exercises
router.get('/', getExercises);

module.exports = router;