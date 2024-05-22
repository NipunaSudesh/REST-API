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


module.exports = router;