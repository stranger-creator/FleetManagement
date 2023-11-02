const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;
const Image = require('./models.js')

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Load environment variables
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Models (Assuming 'models.js' correctly defines imgSchema and User)
const imgSchema = require('./models.js');
const User = mongoose.model('User', {
  name: String,
  age: Number,
  experience: String,
  licenseNumber: String,
  email: String,
  password: String,
  familiarRoutes: String, // Add the familiarRoutes field here
});
const userRouteSchema = new mongoose.Schema({
  start: String,
  end: String,
  startTime: Date,
  endTime: Date,
});

const UserRoute = mongoose.model('UserRoute', userRouteSchema);

module.exports = UserRoute;
// Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// MongoDB Connection
mongoose.connect( 'mongodb+srv://shannon:pereira@cluster0.8y3ievi.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Handle image upload form
app.post('/', upload.single('image'), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    cost: req.body.cost,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    }
  };

  imgSchema.create(obj)
    .then((item) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/getTotalCost/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail; // Extract the user's email from the URL parameter

    const bills = await Image.find({ name: userEmail }); // Find all documents with the specified 'name'

    // Calculate the total cost by summing the cost of all retrieved bills
    const totalCost = bills.reduce((acc, bill) => acc + (bill.cost || 0), 0);

    res.json({ totalCost });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching bills');
  }
});

app.post('/storeUserData', async (req, res) => {
  try {
    const { start, end, startTime, endTime } = req.body;

    // Create a new document using the UserRoute model
    const userRoute = new UserRoute({
      start,
      end,
      startTime,
      endTime,
    });

    // Save the document to the collection
    await userRoute.save();

    res.status(201).json({ message: 'User data saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user data');
  }
});


app.get('/', (req, res) => {
  imgSchema.find({})
  .then((data, err)=>{
      if(err){
          console.log(err);
      }
      res.render('imagePage',{items: data})
  })
});

app.get('/search/:place', (req, res) => {
  const searchPlace = req.params.place;

  // Create a case-insensitive regular expression for the search
  const searchRegex = new RegExp(searchPlace, 'i');

  // Search for users with familiarRoutes matching the search place (case-insensitive)
  User.find({ familiarRoutes: searchRegex }, 'name')
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error('Search error:', err);
      res.status(500).json({ error: 'Server error' });
    });
});


// Register a user
app.post('/signup', (req, res) => {
  const { name, age, experience, licenseNumber, email, password, familiarRoutes } = req.body;

  const newUser = new User({
    name,
    age,
    experience,
    licenseNumber,
    email,
    password,
    familiarRoutes, // Include the familiarRoutes field
  });

  newUser.save()
    .then(() => {
      res.send('User registered successfully.');
    })
    .catch(err => {
      res.status(400).send('Error: ' + err);
    });
});

// Get user by email
app.get('/user/:email', (req, res) => {
  const userEmail = req.params.email;

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
