import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

        // Show a success toast
        toast.success('Data submitted successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Optional: Close the toast after 3 seconds
        });
      })
      .catch((error) => {
        console.error('Error sending data:', error);

        // Show an error toast
        toast.error('Error sending data', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="user-data-form-container">
      <div className="user-data-form-content">
        <h2>Enter User Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
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
          <div className="input-group">
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
          <div className="input-group">
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
          <div className="input-group">
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
      <ToastContainer />
    </div>
  );
};

export default UserDataForm;
