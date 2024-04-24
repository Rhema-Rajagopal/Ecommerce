import React from "react";
import "./Navbar.css";
import navlogo from "../../Assets/nav-logo.svg";
import navProfile from "../../Assets/profile.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" />
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
