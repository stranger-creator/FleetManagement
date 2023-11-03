import React, { useState } from 'react';
import axios from 'axios';
import './UserDataForm.css';
const UserDataForm = () => {
  const [formData, setFormData] = useState({
    start: '',
    end: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    axios
      .post('http://localhost:3000/storeUserData', formData) // Use the correct backend endpoint
      .then((response) => {
        // Handle the response from the backend, if needed
        console.log('Data sent successfully');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className="about-container">
      <div className="image-container"></div>
      <div className="about-content">
        <h2>Enter User Data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="start">Start Location:</label>
            <input
              type="text"
              id="start"
              name="start"
              value={formData.start}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="end">End Location:</label>
            <input
              type="text"
              id="end"
              name="end"
              value={formData.end}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="startTime">Start Time:</label>
            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="endTime">End Time:</label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserDataForm;
