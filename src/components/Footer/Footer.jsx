import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>DaVine Counseling Services, LLC</h3>
      <div className="contact-info">
        <p>
          <i className="fas fa-map-marker-alt"></i> Oahu, Hawaii
        </p>
        <span className="separator">|</span>
        <p>
          <i className="fas fa-phone-alt"></i> 808-207-0637
        </p>
        <span className="separator">|</span>
        <p>
          <i className="fas fa-envelope"></i> DaVineCSLLC@gmail.com
        </p>
      </div>
      <h5 className="copyright">©{year} DaVine Counseling Services, LLC</h5>
    </div>
  );
};

export default Footer;
