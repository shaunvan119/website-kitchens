import React from 'react'
import "./header.css"
import logoWhite from "../assets/roofingWhite.png"


const Header = () => {
  return (
    <div className="top_header">
    <img className="logo" src={logoWhite} alt="logo"/>
    <button  className="contact_button_header"><a href="tel:0433310964">Call 0433310964</a></button>
    
 
</div>
  )
}

export default Header