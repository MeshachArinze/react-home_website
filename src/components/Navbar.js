import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import "./Navbar.css";

const Navbar = () => {

  const [btn, setBtn] = useState(false);
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setBtn(!btn)
  }
  const btnControl = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', btnControl);
    return () => {window.removeEventListener('scroll', btnControl);}
  });
  

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <nav className={`NavParent ${show && 'nav__blue'}`}>
        <div className="NavChild">
          <div className="NavName">Home</div>
          <button className="NavBtn" onClick={handleToggle}>
            {btn ? <FaTimes/> : <FaBars />}
          </button>
          <div className={`NavUlMenu ${btn ? " showMenu" : ""}`}>
            <ul className='NavUl'>
              <li className="NavLi" id="home" onClick={handleToggle}> 
              <a href="#home" id="home">
                Home
              </a>
              </li>
              <li className="NavLi" id="blog" onClick={handleToggle}>
              <a href="#blog">
                Blog
              </a>             
              </li>
              <li className="NavLi" id="service" onClick={handleToggle}>
                <a href="#service">
                Service
              </a>
              </li>
            </ul>
          </div>
        </div>  
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;