import React from 'react';
import BusSchedule from './BusSchedule';
import Carousel from './Carousel';
import './Home.css'; // Import a CSS file for styling

const Home = () => {
  return (
    <div className="container-fluid home-container"> {/* Apply a custom CSS class */}
      <div className="row">
        <div className="col-md-2">
          {/* Navbar content */}
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-content">
                  <br></br>
                  <Carousel />
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BusSchedule />
      </div>
    </div>
  );
};

export default Home;
