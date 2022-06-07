import React from "react";
import "./Navbar.scss";
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  React.useEffect(() => {
    window.addEventListener("scroll", addScrollEvent, { passive: true });

    return () => window.removeEventListener("scroll", addScrollEvent);
  }, []);

  const addScrollEvent = (e) => {
    let nav = document.getElementById("nav");


    if (e.path[1].scrollY >= 76) {
      nav.style.backgroundColor = "black";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  };

  return (
    <div class="nav" id="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title h-100 d-flex align-items-center justify-content-center">
     <div className="logocon">
 <img src={logo} alt="" />
</div>
    </div>
  </div>
 
  
  <div class="nav-links  ">
  <ul>
       <li><a class="active" href="#home">Contact us</a></li>
       <li className="nav-btn">
       <Link to='/About'>About us</Link>
         {/* <a class="active" href="#home">About us</a> */}
         </li>
       <li><a class="active" href="#home">Quality</a></li>
  <li><a class="active" href="#home">Products</a></li>
  <li><a href="#news">Clients</a></li>
  <li><a href="#contact">Facilities</a></li>
  <li >
  <Link to='/'>Home</Link>
    </li>
</ul>
  </div>
  <div class="nav-btn h-100 d-flex  align-items-center mr-sm-3">
    <label for="nav-check" className="m-0">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</div>
  );
}

export default Navbar;
