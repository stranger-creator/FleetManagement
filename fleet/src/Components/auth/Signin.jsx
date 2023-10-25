import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './Signin.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Display a success notification
        toast.success('Sign in successful!', {
          position: 'top-right',
          autoClose: 2000, // Close the notification after 2 seconds
        });
        console.log(userCredential);
        delayedAction();
        // Programmatically navigate to the homepage after successful login
      })
      .catch((error) => {
        // Display an error notification
        toast.error(`Sign in failed: ${error.message}`, {
          position: 'top-right',
          autoClose: 2000,
        });
        console.log(error);
      });
  };
  const delayedAction = () => {
    // Add a 2-second delay before performing an action
    setTimeout(() => {
      // Code to execute after the delay
      navigateToHomepage();
      // Perform your action here
    }, 2000);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigateToHomepage = () => {
    // Use any navigation method to go to the homepage
    window.location.href = '/'; // Replace 'homepage' with the actual route
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-2">
          {/* Navbar content */}
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-content">
                  <div className="sign-in-container">
                    <form onSubmit={signIn}>
                      <h2>Sign In</h2>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <button type="submit">Log In</button>
                      <p>Not Registered?</p>
                      <Link to="/signup">Sign Up</Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add the ToastContainer to display notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Signin;
