import React from 'react'
import "./Navbar.css"
import Symbols from "../images/Symbols.png"
import Bell from "../images/notification bell.png"
import Profile from "../images/profile picture.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarLogo">
            <img src={Symbols} alt="" />
        </div>
         <div className="navbartitle">
         <ul className="navbarlist">
                <li className="navbaritem">Explore</li>
                <li className="navbaritem">Search</li>
                <li className="navbaritem">Hotel</li>
                <li className="navbaritem">Offers</li>
            </ul>
            <div className="icon">
            <div className="bell">
                <img src={Bell} alt="" />
            </div>
            <div className="profile">
                <img src={Profile} alt="" />
            </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar
