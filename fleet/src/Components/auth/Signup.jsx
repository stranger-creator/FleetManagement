import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('1-2 years');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [familiarRoutes, setFamiliarRoutes] = useState(''); // Add familiarRoutes
  const [firebaseError, setFirebaseError] = useState(null);

  const signUp = (e) => {
    e.preventDefault();

    setFirebaseError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Firebase authentication success:', userCredential);

        const userData = {
          name,
          age,
          experience,
          licenseNumber,
          email,
          password,
          familiarRoutes, // Include the familiarRoutes field
        };

        axios
          .post('http://localhost:3000/signup', userData)
          .then((response) => {
            console.log('User registered successfully:', response.data);
            toast.success('Registration successful!', {
              position: 'top-right',
              autoClose: 2000,
            });
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          })
          .catch((error) => {
            console.error('Registration error:', error);
            toast.error('Registration error', {
              position: 'top-right',
              autoClose: 2000,
            });
          });
      })
      .catch((error) => {
        console.error('Firebase authentication error:', error);
        setFirebaseError(error.message);
        toast.error(`Firebase authentication error: ${error.message}`, {
          position: 'top-right',
          autoClose: 2000,
        });
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

  const handleFamiliarRoutesChange = (e) => {
    setFamiliarRoutes(e.target.value);
  };

  return (
    <div className='sign-in-container mt-5' style={{ marginLeft: 'auto', marginRight: '395px', maxWidth: '400px' }}>
      <form onSubmit={signUp}>
        <h2 style={{ fontFamily: 'Times, serif' }}><b>Sign Up</b></h2>
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
          Experience:&nbsp;
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
          type='text'
          placeholder='Familiar Routes' // Add familiarRoutes input
          value={familiarRoutes}
          onChange={handleFamiliarRoutesChange}
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
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Signup;
