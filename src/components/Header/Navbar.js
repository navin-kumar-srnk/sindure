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
      nav.style.backgroundColor = "#ff000052";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  };

  return (
    <header className="nav" id="nav">
      <div className="logocon">
       <img src={logo} alt="" />
      </div>
       <div className="linkCon">
       <ul>
       <li><a class="active" href="#home">Contact us</a></li>
       <li><a href="#news">Clients</a></li>
       <li><a class="active" href="#home">Quality</a></li>
       <li>
       <Link to='/About'>About us</Link>
         {/* <a class="active" href="#home">About us</a> */}
         </li>
       
  <li>
    {/* <a class="active" href="#home">Products</a> */}
    <Link to='/Products'>Products</Link>
    </li>
 
  <li>
    {/* <a href="#contact">Facilities</a> */}
    <Link to='/Facilities'>Facilities</Link>
    </li>
  <li >
    {/* <a href="#about">Home</a> */}
    <Link to='/'>Home</Link>
    </li>
</ul>
       </div>
    </header>
  );
}

export default Navbar;
