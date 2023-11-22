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
          <p className="navp"> &#9776;</p>
        </button>
      </div>

      {mobileNavBar ? (
        <div className="navb" id="myNavbar">
          <div className="closebtn" onClick={() => hamburger(false)}>
            <button className="xbtn"> X</button>
          </div>
          <Link to="/" ><p className="navt">HOME</p></Link>
          <Link to="/about" ><p className="navt"> ABOUT</p></Link>
          <Link to="/skills" ><p className="navt">SKILLS</p></Link>
          <Link to="/project" ><p className="navt">PROJECT</p> </Link>
          <Link to="/contact"><p className="navt">CONTACT</p> </Link>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
export default Navbar;
