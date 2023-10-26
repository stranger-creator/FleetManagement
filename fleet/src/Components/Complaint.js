import './Complaint.css';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('complaint', formData.complaint);
    formDataToSubmit.append('testImage', formData.image);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (response.status === 200) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="complaint-container mt-5">
      <h1>Report the Complaint</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
