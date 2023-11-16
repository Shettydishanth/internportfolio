
import '../css/Nav.css';
import React,{useState} from "react";
function Navbar(){
  const [mobileNavBar,setMobileNavbar]=useState(false)
  const hamburger=(value)=>{
      setMobileNavbar(value)
  }
  return(
      <>
      <div className="navbar" id="myNavbar">
      <a href="#image1">Home</a>
      <a href="#image2">Services</a>
      <a href="#image3">About</a>
      <a href="#image4    ">Contact</a>
      <button className="btn"onClick={()=>hamburger(true)}>
     <p> &#9776;</p>

      </button>
      
  </div>

  {
      mobileNavBar?
      <div className="navb" id="myNavbar">
          <div className='closebtn'
          onClick={()=>hamburger(false)}><button>X</button></div>
      <a href="#image1">Home</a>
      <a href="#image2">Services</a>
      <a href="#image3">About</a>
      <a href="#image4    ">Contact</a>
      </div>
      :
      " "
  }
  
      </>
  )
}
export default Navbar