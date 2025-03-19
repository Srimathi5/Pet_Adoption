import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with Email:", email);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {showPopup && (
        <div className="popup">
          <p>Login Successfully!</p>
        </div>
      )}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>
          Not have an account? <Link to="/SignIn">Signup here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
