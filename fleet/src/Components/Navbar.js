import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
        {/* Toggle button for xs screens */}
        <div className="toggle-button" onClick={handleToggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul>
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
    </div>
  );
};

export default Navbar;
