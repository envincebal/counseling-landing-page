import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="section-container">
      <h1 className="contact-title">CONTACT ME</h1>
      <div className="contact-div">
        <div className="form-div">
          <form action="">
            <input
              className="form-input name-input"
              type="text"
              placeholder="Name"
            />
            <input
              className="form-input email-input"
              type="email"
              placeholder="Email*"
            />
            <textarea
              className="form-input message-input"
              name="message"
              id=""
              cols="60"
              rows="10"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div className="contact-details">
          <p>
            If you have any further questions or schedule an appointment, please
            feel free to reach out to me!
          </p>
          <br />
          <p>
            You can call me and if I don't answer, leave a message and I will
            get back to you as soon as I can. Otherwise you can email me using
            the email link below or the contact form on this page. I look
            forward to hearing from you!
          </p>
          <div className="contact-methods">
            <p className="email">
              <i className="fas fa-envelope contact-icon"></i>{" "}
              <a className="email-link" href="mailto:DaVineCSLLC@gmail.com">
                DaVineCSLLC@gmail.com
              </a>
            </p>
            <p className="phone-number">
              <i className="fas fa-phone-alt contact-icon"></i>{" "}808-207-0637
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
