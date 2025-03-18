const userModel = require('../models/userModel');

/**
 * Get all users
 */
exports.getUsers = (req, res, next) => {
    try {
        const users = userModel.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

/**
 * Get a user by ID
 */
exports.getUserById = (req, res, next) => {
    try {
        const user = userModel.getById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};