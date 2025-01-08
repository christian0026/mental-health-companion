const express = require('express');
const { createResource, getResources } = require('../controllers/resourceController');
const router = express.Router();

//Route to create a new resource
router.post('/', createResource);

//Route to get all resources
router.get('/', getResources);

module.exports = router;