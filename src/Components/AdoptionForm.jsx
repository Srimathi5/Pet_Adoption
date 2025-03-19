import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdoptPetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption request submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="adoptform-page">
      <h2>Adopt a Pet</h2>

      <label>Your Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Phone Number:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label>Message : </label>
      <input
        type="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">
        <Link to="/AdminRequest">Submit</Link>
      </button>
    </form>
  );
}

export default AdoptPetForm;
