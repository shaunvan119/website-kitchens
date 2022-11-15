import React from 'react'
import "./footer.css"
import hiaLogo from "../assets/hiaLogo.png"
import google from "../assets/google.png"
import Reecelogo from "../assets/Reecelogo.jpeg"
import logoWhite from "../assets/logoWhite.png"
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare,AiFillYoutube } from 'react-icons/ai';
import {FaPinterestSquare } from 'react-icons/fa';

const style = { color: "white", fontSize: "1.5em" }

const Footer = () => {
  return (
    <div className="footer_wrapper">
     <div className="logo_footer">
        <img className="logo" src={logoWhite} alt="logo"/>
        <p className="address">Collins st Melbourne CBD<br/>Victoria 3000<br/>Mobile: 0433310964</p>
     </div>
     <div className="socail_icons">
        <>
        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><AiFillFacebook style={style}/></a>
        <a href="https://twitter.com/explore" rel="noopener noreferrer" target="_blank"><AiFillTwitterSquare style={style}/></a>
        <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank"><AiFillYoutube style={style}/></a>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin style={style}/></a>
        <a href="https://www.pinterest.com.au/" rel="noopener noreferrer" target="_blank"><FaPinterestSquare style={style}/></a>
        </>
        <>
        <p className="copy">2021 © SLV Roofing Melbourne</p>
        </>
     </div>
     <div>
     
  
     </div>
     
      <div className="badges">
        <a href="https://hia.com.au/" rel="noopener noreferrer" target="_blank"><img className="logo_badge" src={hiaLogo} alt="hia logo"/></a>
        <a href="https://colorbond.com/" rel="noopener noreferrer" target="_blank" ><img className="logo_badge"  src={google} alt="colorbond logo"/></a>
        <a href="https://www.reece.com.au/" rel="noopener noreferrer" target="_blank" ><img className="logo_badge"  src={Reecelogo} alt="reece logo"/></a>
      </div>
    </div>
  )
}

export default Footer