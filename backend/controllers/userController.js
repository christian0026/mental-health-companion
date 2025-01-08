const User = require('../models/User');

//Create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password, contactNumber } = req.body;
        const user = new User({name, email, password, contactNumber});
        await user.save();
        res.status(201).json({message: 'User created successfully', user});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});

    }
};

//Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
};

module.exports = { createUser };
