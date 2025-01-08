const Exercise = require('../models/Exercise');

//Create a new exercise
const createExercise = async (req, res) => {
    try {
        const { name, description, category, duration, intensity, frequency } = req.body;
        const exercise = new Exercise({name, description, category, duration, intensity, frequency});
        await exercise.save();
        res.status(201).json({message: 'Exercise created successfully', exercise});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});

    }
}

//Get all exercises
const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createExercise, getExercises };
