import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('1-2 years');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [firebaseError, setFirebaseError] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    
    setFirebaseError(null); // Reset Firebase error

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Firebase authentication success:', userCredential);

        // Continue with the registration in MongoDB
        const userData = {
          name,
          age,
          experience,
          licenseNumber,
          email,
          password,
        };

        // Make a POST request to your server
        axios.post('http://localhost:3000/signup', userData)
          .then((response) => {
            console.log('User registered successfully:', response.data);
          })
          .catch((error) => {
            console.error('Registration error:', error);
          });
      })
      .catch((error) => {
        console.error('Firebase authentication error:', error);
        setFirebaseError(error.message); // Set the Firebase error message
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  return (
    <div className='sign-in-container mt-5'>
      <form onSubmit={signUp}>
        <h2>Sign Up</h2>
        <input
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={handleNameChange}
        />
        <input
          type='text'
          placeholder='Age'
          value={age}
          onChange={handleAgeChange}
        />
        <label>
          Experience:
          <select value={experience} onChange={handleExperienceChange}>
            <option value="1-2 years">1-2 years</option>
            <option value="2-10 years">2-10 years</option>
            <option value="more than 10 years">more than 10 years</option>
          </select>
        </label>
        <input
          type='text'
          placeholder='License Number'
          value={licenseNumber}
          onChange={handleLicenseNumberChange}
        />
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={handlePasswordChange}
        />
        {firebaseError && <p style={{ color: 'red' }}>{firebaseError}</p>}
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
