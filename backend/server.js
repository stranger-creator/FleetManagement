const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

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
});

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
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  imgSchema.create(obj)
  .then ((err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
          res.redirect('/');
      }
  });
});


// Retrieve uploaded images
app.get('/', (req, res) => {
  imgSchema.find({})
  .then((data, err)=>{
      if(err){
          console.log(err);
      }
      res.render('imagePage',{items: data})
  })
});

// Register a user
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
