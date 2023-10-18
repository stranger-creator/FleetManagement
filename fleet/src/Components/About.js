import React from 'react';
import './About.css'; // Rename the CSS file accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import abt from './Images/About.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={abt} alt="Fleet" className="fleet-image img-fluid" />
      </div>
      <div className="about-content">
        <h1 className="about-title">Discover Our Fleet Management Expertise</h1>
        <p className="about-text">
          Elevate Fleet Management is your trusted partner in optimizing and revolutionizing your vehicle fleet. With a commitment to innovation, sustainability, and excellence, we provide solutions that drive success.
        </p>
        <p className="about-text">
          Our team of experienced professionals specializes in fleet optimization, maintenance, and telematics. We use cutting-edge technology to help you reduce operational costs, improve efficiency, and make your fleet operations more sustainable.
        </p>
        <p className="about-text">
          We are dedicated to helping businesses like yours succeed in today's competitive market. Elevate Fleet Management is not just a service; it's a partnership that goes beyond fleet management.
        </p>
        <a href="/contact" className="btn btn-orange">Contact Us</a>
      </div>
    </div>
  );
}

export default About;
