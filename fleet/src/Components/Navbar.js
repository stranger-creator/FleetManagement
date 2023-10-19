import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
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

  const [menuVisible, setMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className='mx-auto'>
      <div className={`navbar ${menuVisible ? 'active' : ''}`}>
        <div className="toggle-button" onClick={handleToggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleDropdownClick('liveTracking')}>
            Live Tracking
            {activeDropdown === 'liveTracking' && (
              <ul className="dropdown">
                <li>
                  <Link to="/live-tracking/subitem1">Subitem 1</Link>
                </li>
                <li>
                  <Link to="/live-tracking/subitem2">Subitem 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownClick('schedule')}>
            Schedule
            {activeDropdown === 'schedule' && (
              <ul className="dropdown">
                <li>
                  <Link to="/schedule/subitem1">Subitem 1</Link>
                </li>
                <li>
                  <Link to="/schedule/subitem2">Subitem 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownClick('fleet')}>
            Fleet
            {activeDropdown === 'fleet' && (
              <ul className="dropdown">
                <li>
                  <Link to="/driverinfo">Driver Details</Link>
                </li>
                <li>
                  <Link to="/fleet/subitem2">Subitem 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownClick('services')}>
            Services
            {activeDropdown === 'services' && (
              <ul className="dropdown">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="login-button">
          {authUser ? (
            <button className="logout-button" onClick={userSignOut}>Sign Out</button>
          ) : (
            <button className="logout-button"><Link to="/login" className="login-button">Login</Link></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
