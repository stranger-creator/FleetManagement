// ComplaintForm.js
import React, { useState } from 'react';
import './Complaint.css';

function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
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
    // Add code to handle the form submission, e.g., send a request to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Report your complaint </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaint;