import React from 'react'
import "./header.css"
import logoWhite from "../assets/logoWhite.png"


const Header = () => {
  return (
    <div className="top_header">
    <img className="logo" src={logoWhite} alt="logo"/>
    <button  className="contact_button_header"><a href="tel:0433310964">Lets chat</a></button>
    
 
</div>
  )
}

export default Header