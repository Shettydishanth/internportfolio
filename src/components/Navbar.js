import { Link, useLocation } from "react-router-dom";
import "../css/Nav.css";
import React, { useEffect, useState } from "react";
function Navbar() {
  //const [navbar, setNavbar] = useState(false);
  const [locate, setlocate] = useState("/");
  const location=useLocation()

  useEffect(() => {
    setlocate(location.pathname);
  }, [location]);

  const [mobileNavBar, setMobileNavbar] = useState(false);
  const hamburger = (value) => {
    setMobileNavbar(value);
  };
  return (
    <>
      <div className="navbar" id="myNavbar">
        {locate === "/" ? " " : <Link to="/">HOME</Link>}
         {locate === "/about" ? " " : <Link to="/about"> ABOUT</Link>}
         {locate === "/skills" ? " " : <Link to="/skills"> SKILLS</Link>}
         {locate === "/project" ? " " : <Link to="/project"> PROJECT</Link>}
         {locate === "/contact" ? " " : <Link to="/contact"> CONTACT</Link>
}
        
       

        <button className="btn" onClick={() => hamburger(true)}>
          <p> &#9776;</p>
        </button>
      </div>

      {mobileNavBar ? (
        <div className="navb" id="myNavbar">
          <div className="closebtn" onClick={() => hamburger(false)}>
            <button>X</button>
          </div>
          <Link to="/">HOME</Link>
          <Link to="/about"> ABOUT</Link>
          <Link to="/skills"> SKILLS</Link>
          <Link to="/project"> PROJECT</Link>
          <Link to="/contact"> CONTACT</Link>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
export default Navbar;
