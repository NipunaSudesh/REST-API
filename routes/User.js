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
        res.status(400).send(err);
    }
});

// Get all user
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = router;