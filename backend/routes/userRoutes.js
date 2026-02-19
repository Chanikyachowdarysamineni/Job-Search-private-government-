const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt'); // For password hashing
const router = express.Router();
const mongoose=require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config()

const app=express();


const MONGO_URI=process.env.MONGODB_URI;

mongoose.connect(MONGO_URI).then(()=>
{
    console.log('Mongoose Ok');
}).catch((err)=>
{
    console.log(err);
})

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser  = await User.findOne({ email });
        if (existingUser ) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser  = new User({ username, email, password: hashedPassword });
        await newUser .save();
        res.status(201).json({ message: 'User  registered successfully' ,newUser});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Example: Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    console.log(email + " " + password);

   try {
    const user = await User.findOne({
        email
    });

    console.log(user)
    if (!user) {
        return res.json({ success: false, message: 'Invalid email or password.' });
    }

    const pass = await bcrypt.compare(password, user.password);


    if (pass) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid email or password.' });
    }
   } catch(err) {
    console.log(err);
   }
});

module.exports = router;