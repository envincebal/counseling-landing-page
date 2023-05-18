import React from "react";
import Verified from "../../img/psychology-today-logo.png";
import Emdria from "../../img/emdria.png";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>DaVine Counseling Services, LLC</h3>
        <p>
          Jessica Wong, LCSW of DaVine Counseling Services, LLC provides trauma
          therapy, maternal mental health counseling, and faith-based Christian
          counseling. Together, we process your past and present so you can
          overcome your trauma and experience the peaceful and abundant life you
          deserve.
        </p>
        <img className="emdria-img" src={Emdria} alt="emdria logo" />
        <a
          href="https://www.psychologytoday.com/us/therapists/jessica-wong-davine-counseling-services-llc-aiea-hi/906067"
          target="_blank"
          rel="noreferrer"
        >
          <img className="verified" src={Verified} alt="verified" />
        </a>
        <div className="contact-info">
          <p>
            <i className="fas fa-map-marker-alt"></i> Oahu, Hawaii
          </p>
          <span className="separator">|</span>
          <p>
            <i className="fas fa-phone-alt"></i>{" "}
            <a href="tel:8082070637" className="phone-number">
              808-207-0637
            </a>
          </p>
          <span className="separator">|</span>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a
              className="email-link"
              href="mailto:jessicawong@davinecounseling.org"
            >
              jessicawong@davinecounseling.org
            </a>
          </p>
        </div>
        <p>
          <a
            className="privacy-link"
            href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:3c5c46a1-1a83-4b6f-a273-83dfedc9ce6a"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </p>

        <p>
          Telehealth sessions from any location of your choice- from Kapolei to
          Honolulu, or anywhere else throughout the State of Hawaii!
        </p>
        <p>I am also an out-of-state telehealth provider for the state of Florida: <a className="privacy-link" href="https://flhealthsource.gov/telehealth/">Click Here</a> </p>
        <h5 className="copyright">©{year} DaVine Counseling Services, LLC</h5>
      </div>
    </div>
  );
};

export default Footer;
