const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;