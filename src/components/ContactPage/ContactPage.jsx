import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-div">
        <div className="form-div">
          <form method="post" action="https://formspree.io/f/meqnjyvr">
            <input
              className="form-input name-input"
              name="name"
              type="text"
              placeholder="Name*"
              required
            />
            <input
              className="form-input email-input"
              name="_replyto"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              type="telephone" className="form-input phone-input"
              name="telephone" placeholder="Phone Number"
            />
            <textarea
              className="form-input message-input"
              name="message"
              cols="60"
              rows="6"
              placeholder="Message*"
              required
            ></textarea>
            <button className="form-submit">SEND</button>
          </form>
        </div>
        <div className="contact-details">
          <p>
            If you have any further questions or schedule an appointment, please
            feel free to reach out to me!
          </p>
          <p>
            You can call me and if I don't answer, leave a message and I will
            get back to you as soon as I can. Otherwise you can email me using
            the email link below or the contact form on this page. I look
            forward to hearing from you!
          </p>
          <div className="contact-methods">
            <p className="email">
              <i className="fas fa-envelope contact-icon"></i>{" "}
              <a className="email-link" href="mailto:jessicawong@davinecounseling.org">
              jessicawong@davinecounseling.org
              </a>
            </p>
            <p>
              <i className="fas fa-phone-alt contact-icon"></i>{" "}<a href="tel:8082070637" className="phone-number">808-207-0637</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
