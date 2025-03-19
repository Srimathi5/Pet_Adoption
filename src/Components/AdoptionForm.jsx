import React, { useState } from "react";

function AdoptPetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption request submitted:", formData);
    setShowPopup(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => setShowPopup(false), 3000);
  };
  return (
    <div className="adoptform-page">
      <h2>Adopt a Pet</h2>
      {showPopup && (
        <div className="popup">
          <p>Adoption request successfully sent!</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      `
    </div>
  );
}
export default AdoptPetForm;
