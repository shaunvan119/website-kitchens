import React from 'react'
import "./main.css"
import backgroundVid from "../assets/backgroundVid.mp4"
import ContactForm from '../components/ContactFrom'
import Kitchens from "../assets/kitchen_log.png"


const Main = () => {
  return (
    <div className="main">
     
       <video src={backgroundVid} autoPlay loop muted/>
       <div className="heading_wrapper">
       <img className="main_heading" src={Kitchens}   alt="kitchen and bathroom logo" />
      </div>

      <div className="content">
        <div className="free_quote_form">
        <ContactForm/>
      </div>
        
      </div>
    </div>
  )
}

export default Main