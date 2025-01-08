const Settings = require('../models/Settings');

//Create a new setting
const createSetting = async (req, res) => {
    try {
        const setting = new Settings({
            name: req.body.name,
            value: req.body.value
        });
        await setting.save();
        res.status(201).json({message: 'Setting created successfully', setting});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Get all settings
const getSettings = async (req, res) => {
    try {
        const settings = await Settings.find();
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createSetting, getSettings };