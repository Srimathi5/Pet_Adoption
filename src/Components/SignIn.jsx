import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { name, email, password });
    setSuccessMessage("Signup Successfully!");
    setName("");
    setEmail("");
    setPassword("");
    setTimeout(() => setSuccessMessage(""), 3000);
  };
  return (
    <div className="signin-container">
      <h2>Sign Up</h2>
      {successMessage && (
        <div className="popup">
          <p>{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
