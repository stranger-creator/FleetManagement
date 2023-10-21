import './Complaint.css'; // Keep this line
import React, { useState } from 'react';

function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: '',
    image: null, // Store the uploaded image here
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Check if the input type is 'file' to handle image uploads
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // Store the uploaded file (image)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle the form submission, e.g., send a request to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="complaint-container mt-5">
      <h1>Report the Complaint</h1>
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

        <label htmlFor="image">Please add your image of the issue:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*" // Allow only image files
          onChange={handleChange}
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaint;
