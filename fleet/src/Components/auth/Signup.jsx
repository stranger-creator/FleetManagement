import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp=(e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential)
    }).catch((error)=>{
        console.log(error);
    })
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={signUp}> 
        <h2>Sign Up</h2>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
