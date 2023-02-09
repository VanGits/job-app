import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <nav className="Nav">
      <div className={menuOpen ? "nav-content open" : "nav-content"}>
       
        <div className="nav-hamburger">
          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              checked={menuOpen}
              onChange={handleHamburgerClick}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <h1 className="logo">LOGO</h1>

        <div className="nav-content-2">
          <h4>View Openings</h4>
          <h4>About</h4>
          <h4>Support</h4>
          <h4>Contact</h4>
        </div>
        <div className="nav-content-buttons">
          <Link to="/login">
            <button className="button log-in">Login</button>
          </Link>
          <button className="button sign-up">Start Now</button>
        </div>
      </div>
     
    </nav>
  );
};

export default Nav;
