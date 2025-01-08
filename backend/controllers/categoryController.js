const Category = require('../models/Category');

//Create a new category
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({name});
        await category.save();
        res.status(201).json({message: 'Category created successfully', category});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});

    }
}

//Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { createCategory, getCategories };
