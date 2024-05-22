const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// Create a new user
router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        res.status(400).send({ error: 'Failed to create user', message: err.message });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch users', message: err.message });
    }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch user', message: err.message });
    }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.status(200).send(user);
    } catch (err) {
        res.status(400).send({ error: 'Failed to update user', message: err.message });
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send({ error: 'User not found' });
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ error: 'Failed to delete user', message: err.message });
    }
});

module.exports = router;
