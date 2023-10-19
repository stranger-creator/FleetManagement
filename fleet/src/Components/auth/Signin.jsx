import React, { useState } from 'react';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn=(e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
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
      <form onSubmit={signIn}> 
        <h2>Sign In</h2>
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
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}

export default Signin;
