import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close the currently open dropdown
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  return (
    <div className="navbar">
      <div className="toggle-button" onClick={handleToggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`menu ${menuVisible ? 'active' : ''}`}>
        <li onClick={() => handleDropdownClick('dashboard')}>
          Dashboard
          {activeDropdown === 'dashboard' && (
            <ul className="dropdown">
              <li>
                <Link to="/dashboard/subitem1">Subitem 1</Link>
              </li>
              <li>
                <Link to="/dashboard/subitem2">Subitem 2</Link>
              </li>
            </ul>
          )}
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
                <Link to="/fleet/subitem1">Subitem 1</Link>
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
                <Link to="/services/subitem1">Subitem 1</Link>
              </li>
              <li>
                <Link to="/services/subitem2">Subitem 2</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
