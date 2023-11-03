// SearchPlace.jsx
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './TodaySchedule.css'; // Import your CSS file

function SearchPlace() {
  const [matchingRoutes, setMatchingRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Fetch familiar routes for the authenticated user
      const familiarRoutesResponse = await fetch(`http://localhost:3000/familiar-routes/${authUser.email}`);
      if (familiarRoutesResponse.ok) {
        const familiarRoutesData = await familiarRoutesResponse.json();
        const place = familiarRoutesData; // Store the data in the 'place' constant
        console.log('Familiar Routes:', place); // Log the familiar routes

        // You can now use the 'place' data in your search
        const response = await fetch(`http://localhost:3000/search/${place}`);
        if (response.ok) {
          const data = await response.json();
          setMatchingRoutes(data);
        } else {
          console.error('Search Request failed');
        }
      } else {
        console.error('Familiar Routes Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="today-container">
      <div className="today-content">
        <h2>Search for Routes</h2>
        <button className="search-button" onClick={handleSearch}>Search</button>
        
        {loading && <p>Loading...</p>}
        {matchingRoutes.length > 0 ? (
          
          <div className="route-cards">
            
            {matchingRoutes.map((route, index) => (
              <div className="route-card" key={index}>
                <strong>Start:</strong> {route.start}
                <br />
                <strong>End:</strong> {route.end}
                <br />
                <strong>StartTime:</strong> {route.startTime}
                <br />
                <strong>EndTime:</strong> {route.endTime}
              </div>
            ))}
          </div>
        ) : (
          <p>No matching routes found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPlace;
