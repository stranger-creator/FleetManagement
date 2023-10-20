import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';
import './Home.css';
import './Driver.css';
import BusSchedule from './BusSchedule';
import Carousel from './Carousel';
import Driver from './Driver';

const Home = () => {
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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-md-2">
          {/* Navbar content */}
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <Carousel />
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 offset-md-1">
          <div className="home-content">
            <BusSchedule />
          </div>
        </div>
        <div className="col-md-5">
          <Driver driverData={driverData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
