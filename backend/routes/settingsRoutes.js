const express = require('express');
const { createSetting, getSettings } = require('../controllers/settingsController');
const router = express.Router();

//Route to create settings
router.post('/', createSetting);

//Route to get all settings
router.get('/', getSettings);

module.exports = router;