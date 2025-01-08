const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router = express.Router();

//Route to create a new user
router.post('/', createUser);
router.post('/getUsers', getUsers);

module.exports = router;