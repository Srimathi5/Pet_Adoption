import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Pets from "./Components/Pets";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import Admin from "./Components/Admin";
import ContactUs from "./Components/ContactUs";
import AdoptionForm from "./Components/AdoptionForm";
import AdminRequest from "./Components/AdminRequest";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/adoptionform" element={<AdoptionForm />} />
        <Route path="/adminrequest" element={<AdminRequest />} />
      </Routes>
    </Router>
  );
};

export default App;
