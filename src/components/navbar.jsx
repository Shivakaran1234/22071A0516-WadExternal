// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";


const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="rollno">
          <p>22071A0512</p>
        </div>
        <div className="links">
          <Link to="/"> Shop </Link>
           <Link to="/contact"> Contact </Link> 
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
