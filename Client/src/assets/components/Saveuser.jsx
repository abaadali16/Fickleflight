import React, { useState } from 'react'
import axios from 'axios';

const Saveuser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange =  (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    try {
      const res = axios.post('http://localhost:5000/api/users', formData);
      console.log("User saved:", res.data);
      alert("User saved!");
      
    } catch (err) {
      console.error("Error saving user:", err);
      alert("Failed to save user.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default Saveuser;
