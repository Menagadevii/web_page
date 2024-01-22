import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FiMenu,FiX} from 'react-icons/fi';
import '../Components/Navbar.css';

function Navbar() {
    const [click,setClick] =useState(false);

    const handleClick = () =>setClick(!click);
    const closemenu=()=>setClick(false)
  return (
    <div>
      <nav className="navbar">
        <div className='nav-container'>
            <NavLink exact to="/" className="nav-logo">
                FOOD
            </NavLink>
            <div className='nav-icons'  onClick={handleClick}>
              {click ? <FiX/> : <FiMenu/>}
      
            </div>
             <ul className={click ? "nav-menu active" :"nav-menu"}>
                <li className='nav-item'>
                <NavLink exact to="/Homee"  activeClassName="active" className="nav-links" onClick={closemenu}>
                Home
            </NavLink>
                </li>
                <li className =" nav-item">
                <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={closemenu}>
                About
            </NavLink>
            </li>
            <li className = "nav-item">
                <NavLink exact to="/blogs"activeClassName="active"  className="nav-links" onClick={closemenu}>
                Blog
            </NavLink>
            </li>
            <li className = "nav-item">
                <NavLink exact to="/contact " activeClassName="active" className="nav-links" onClick={closemenu}>
                Contact Us
            </NavLink>
            </li>
            </ul>
            <div className="nav-icon">
                <i className="fas fa-times"></i>
                </div> 
                </div>
      </nav>
    </div>
  )
}

export default Navbar;
