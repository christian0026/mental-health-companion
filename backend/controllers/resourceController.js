const Resource = require('../models/Resource');

//Create a new resource
const createResource = async (req, res) => {
    try {
        const resource = new Resource({
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        });
        await resource.save();
        res.status(201).json({message: 'Resource created successfully', resource});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

//Get all resources
const getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createResource, getResources };

