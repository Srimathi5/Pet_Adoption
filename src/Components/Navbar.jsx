import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Pet Adoption</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link to="/signin">Sign Up</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
