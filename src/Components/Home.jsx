import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2>Welcome to PetAdoption!</h2>
      <p>Your one-stop solution to find a loving pet!</p>
      <button>
        <Link to="/pets" className="home-btn">
          Adopt Me
        </Link>
      </button>
    </div>
  );
};

export default Home;
