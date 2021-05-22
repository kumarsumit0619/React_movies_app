import React, { useState , useEffect } from 'react'
import './Nav.css';

function Nav() {
    {/*scroll listner for getting header when scrolled > 100px down from Y axis*/}
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img 
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix Logo"
      />

      <img 
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1344120321071144962/VQr5fPhx.jpg"
        alt="Netflix Logo"
      
      />
    </div>
  )
}

export default Nav
