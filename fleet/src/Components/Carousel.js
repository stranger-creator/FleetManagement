import React from 'react';

export default function Carousel() {
  const containerStyle = {
    borderRadius: '20px', // Add border-radius for curved container
    overflow: 'hidden', // Ensure that content doesn't overflow the curved corners
    margin: '0 auto', // Center the carousel horizontally
    marginLeft: '50px', // Add left margin to move it to the right
    width: '90%', // Adjust the width as needed
   
    
  };

  const imageStyle = {
    height: '350px', // Set the desired height here
    objectFit: 'cover',
  };

  return (
    <center>
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel" style={containerStyle}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="https://techstory.in/wp-content/uploads/2019/02/fleet-management-banner.jpg"
            className="d-block w-100 carousel-image" // Add a class for the carousel images
            alt="Image not found error 404"
            style={imageStyle} // Apply the image style
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Welcome</h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://www.ebillity.com/wp-content/uploads/2020/07/post-fleet-management.jpg"
            className="d-block w-100 carousel-image" // Add a class for the carousel images
            alt="Image not found error 404"
            style={imageStyle} // Apply the image style
          />
          <div className="carousel-caption d-none d-md-block">
            <br></br>
            <h1 style={{color:'black'}}>Optimizing Your Bus Routes</h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://w0.peakpx.com/wallpaper/265/245/HD-wallpaper-temsa-maraton-coach-bus-2020-passenger-bus-passenger-transport-bus-on-the-road-new-buses-temsa.jpg"
            className="d-block w-100 carousel-image" // Add a class for the carousel images
            alt="Image not found error 404"
            style={imageStyle} // Apply the image style
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>An Expert Team at Your Service.</h1>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" ariahidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </center>
  );
}
