import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged} from 'firebase/auth';
function SearchPlace() {
  const [matchingRoutes, setMatchingRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(''); // Assuming you have a way to obtain the user's email
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
    <div className="about-container">
      <div className="image-container"></div>
      <div>
        <h1 style={{ color: 'black' }}>Search for Routes</h1>
        <button onClick={handleSearch}>Search</button>
        {loading && <p style={{ color: 'black' }}>Loading...</p>}
        {matchingRoutes.length > 0 ? (
          <div>
            <h2 style={{ color: 'black' }}>Matching Routes:</h2>
            <ul>
              {matchingRoutes.map((route, index) => (
                <li key={index} style={{ color: 'black' }}>
                  <strong>Start:</strong> {route.start}
                  <br />
                  <strong>End:</strong> {route.end}
                  <br />
                  <strong>StartTime:</strong> {route.startTime}
                  <br />
                  <strong>EndTime:</strong> {route.endTime}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{ color: 'black' }}>No matching routes found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPlace;
