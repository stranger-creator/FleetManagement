const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();

const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://shannon:pereira@cluster0.8y3ievi.mongodb.net/test';

// Use the cors middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Create a MongoDB model for the user data
const User = mongoose.model('User', {
  name: String,
  age: Number,
  experience: String,
  licenseNumber: String,
  email: String,
  password: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to handle form data submission
app.post('/signup', (req, res) => {
  const { name, age, experience, licenseNumber, email, password } = req.body;

  const newUser = new User({
    name,
    age,
    experience,
    licenseNumber,
    email,
    password,
  });

  newUser.save()
    .then(() => {
      res.send('User registered successfully.');
    })
    .catch(err => {
      res.status(400).send('Error: ' + err);
    });
});
app.get('/user/:email', (req, res) => {
  const userEmail = req.params.email;

  // Find the user based on their email
  User.findOne({ email: userEmail })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Server error' });
    });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
