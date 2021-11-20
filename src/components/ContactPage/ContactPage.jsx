import React from 'react'
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="form-div">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email*" />
          <textarea name="message" id="" cols="60" rows="10"></textarea>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
