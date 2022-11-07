import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import './BookNow.css'


const Result = () => {
  return (
    
    <p className="result-msg">Your message has been sent</p>
   
  );
};

const BookNow = () => {
  const [result, showResult] = useState(false)
 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4aiwmr",
        "template_rer8is9",
        form.current,
        "Fh0Y9YM-DloiKhGif"
      )
      .then(
        (result) => {
          console.log(result.text);
       
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  return (

    <div>
    <h1 className="Heading_quote">Get a free <span style={{ color: "#d89e1a" }} >Quote</span></h1>
     <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input-contact" type="text" name="user_name" />
        <label>Email</label>
        <input className="input-contact" type="email" name="user_email" />
        <label >Type of Job</label>
        <textarea className="input-contact" name="message" />
        <label>When do you want us to start?</label>
        <textarea className="input-contact" name="message" />
        <label>Suburb</label>
        <textarea className="input-contact" name="message" />
        <div> {result ? <Result/> : null}</div>
        <input className="input-button  last_input" type="submit" value="Send" />
      </form>
   
 </div>  
  );
};

export default BookNow;