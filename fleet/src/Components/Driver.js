import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';
import './Driver.css';

const Driver = () => {
  const [driverData, setDriverData] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Fetch driver details based on the authenticated user's email
    if (authUser) {
      axios
        .get(`http://localhost:3000/user/${authUser.email}`)
        .then((response) => {
          setDriverData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching driver data:', error);
        });
    }
  }, [authUser]);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
     
            <div className={`driver-card ${isFlipped ? 'is-flipped' : ''}`}>
              <div className="driver-card-inner">
                <div className="driver-card-front">
                  <h2 className="card-title">Driver Information</h2>
                  <img src="https://cdn-icons-png.flaticon.com/512/3001/3001764.png" alt="Driver's Image" className="driver-image" />
                </div>
                <div className="driver-card-back">
                  {driverData ? (
                    <div>
                      <h2 className="card-title">Driver Information</h2>
                      <p className="card-text">Name: {driverData.name}</p>
                      <p className="card-text">Email: {driverData.email}</p>
                      <p className="card-text">Age: {driverData.age}</p>
                      <p className="card-text">Experience: {driverData.experience}</p>
                      <p className="card-text">License Number: {driverData.licenseNumber}</p>
                      {/* Add more fields as needed */}
                    </div>
                  ) : (
                    <p className="card-text">Loading driver information...</p>
                  )}
                </div>
              </div>
              
            </div>
           
          
  );
};

export default Driver;
