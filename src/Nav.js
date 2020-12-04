import React,{ useState, useEffect } from 'react';
import img from './img/avatar_img.png';
import Logo from './img/Logo_netfilm.png';
import './Nav.css'


function Nav() {
   const [show, handleShow] = useState(false); 

   useEffect(() => {
     window.addEventListener("scroll", ()=> {
       if (window.scrollY > 100) {
         handleShow(true);
       } else handleShow(false);
     });
     return () => {
       window.removeEventListener("scroll");
     };
   }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img 
      className="nav__logo"
      src={Logo}
      alt="Netflim Logo"
      />

      <img 
      className="nav__avatar"
      src={img} 
      alt="Netfilm Avatar"
      />
    </div>
  )
}

export default Nav
