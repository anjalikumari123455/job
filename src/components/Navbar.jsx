import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on any link click (for mobile UX)
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
          <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.5"></circle>
          <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"></circle>
        </svg>
        JobPortal
      </div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setMenuOpen(!menuOpen) }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links and buttons container */}
      <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
        <div className="navbar-links">
          <Link to="/" onClick={closeMenu}>Start a search</Link>
          <Link to="/Login" onClick={closeMenu}>Myjobs</Link>
          <Link to="/Estimate" onClick={closeMenu}>Salary estimate</Link>
          <Link to="/Postjob" onClick={closeMenu}>Post a Job</Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/Login" className="btn login" onClick={closeMenu}>Log in</Link>
          <Link to="/Signup" className="btn signup" onClick={closeMenu}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
