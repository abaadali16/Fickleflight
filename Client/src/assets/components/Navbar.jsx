import React from 'react'
import { NavLink } from 'react-router-dom'
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
          <li className="navbaritem"><NavLink to="/">Explore</NavLink> </li>
          <li className="navbaritem"><NavLink to="/Search">Search</NavLink> </li>
          <li className="navbaritem"><NavLink to="/Hotel">Hotel</NavLink> </li>
          <li className="navbaritem"><NavLink to="/Offers">Offers</NavLink> </li>
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
