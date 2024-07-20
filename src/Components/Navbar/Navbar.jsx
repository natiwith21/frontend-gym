import React from "react";
import "./Navbar.css";
import gym from "../../assets/gym.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="lg">
        <div>
          <span className="four">4</span>
          <span className="k">k</span>
        </div>
        <img src={gym} alt="" className="logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>PROGRAMS</li>
        <li>WHY US</li>
        <li>PLANS</li>
        <li>TESTIMONIALS</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
