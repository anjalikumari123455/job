import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"

function Navbar(){
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none"><circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.5"></circle><circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"></circle></svg> JobPortal</div>
      <div className="navbar-links">
       <Link to="/">Start a search</Link>
       <Link to="/Login">Myjobs</Link>
       <Link to="/Estimate">Sallary estimate</Link>
       <Link to="/Postjob">Post a Job</Link>
        
        
      
      </div>
      <div className="navbar-buttons">
        <Link to ="/Login"className="btn login">Log in</Link>
        <Link to ="/Signup" className="btn signup">Sign up</Link>
      </div>
    </nav>
    
</>


  );
};

export default Navbar;

 
