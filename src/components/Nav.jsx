import React from "react";
import "../styles/Nav.css";
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="nav-content">
        <h1 className="logo">LOGO</h1>
        <div className="nav-content-2">
          <h4>View Openings</h4>
          <h4>About</h4>
          <h4>Support</h4>
          <h4>Contact</h4>
        </div>
        <div className="nav-content-buttons">
          <Link to ="/login"><button className="button log-in">Login</button></Link>
          <button className="button sign-up">Start Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
