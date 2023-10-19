import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';
import './Driver.css'; // Import the external CSS file

const Driver = () => {
  const [driverData, setDriverData] = useState(null);
  const [authUser, setAuthUser] = useState(null);

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

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="driver-card">
            <h2 className="card-title">Driver Information</h2>
            {driverData ? (
              <div>
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
    </div>
  );
};

export default Driver;
