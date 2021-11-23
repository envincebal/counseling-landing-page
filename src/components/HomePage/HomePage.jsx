import React from "react";
import Logo from "../../img/logo.png";
import Photo from "../../img/photo.jpg";
import { LinkContainer } from "react-router-bootstrap";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="section-container">
      <div className="logo-div">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="home-header">
        <h4>Trauma Therapy and Faith-Based Christian Counseling in Hawaii</h4>
        <h5>
          Make Peace with Your Past So You Can Move into an Abundant Future
        </h5>
      </div>
      <div className="intro-section">
        <div className="intro-text">
          <p> Hi, I’m Jessica, and I can help!</p>
          <p>
            I provide trauma therapy using a warm and welcoming approach. I am
            trained in Eye Movement Desensitization and Reprocessing (EMDR), the
            Flash Technique (FT), Trauma-Focused Cognitive-Behavioral Therapy
            (TF-CBT), person-centered therapy, and other methods. I also offer
            faith-based Christian counseling to those who are interested in
            incorporating their Christian faith into their therapy sessions. My
            clients walk away from therapy with me feeling understood,
            connected, whole, and with greater insights into themselves, their
            relationships with those around them, and their relationships with
            Jesus.
          </p>
        </div>
        <div className="photo-div">
          <img className="photo" src={Photo} alt="pic" />
        </div>
      </div>
      <div className="contact-me-now">
        <p>Have questions or want to set up an appointment? Click Below!</p>
        <LinkContainer to="/contact">
        <button className="contact-button">Contact Me</button>
        </LinkContainer>
      </div>
      <div className="specialties-intro">
        <h4 className="section-title">Specialties / Clinical Interests</h4>
        <p className="specialty-text">
          <span className="specialty-span">
            Faith-Based Christian Counseling:{" "}
          </span>
          Allow Jesus to be the source of your healing so that you can feel more
          connected to Him, to those around you, and to the core of who you are
          so that you can feel whole again. “I sought the Lord, and He answered
          me, and delivered me from all my fears. They looked to Him and were
          radiant, and their faces will never be ashamed.”{" "}
          <span className="verse">-Psalms 34:4-5</span>
        </p>
        <p className="specialty-text">
          <span className="specialty-span">
            Eye Movement Desensitization and Reprocessing (EMDR) &The Flash
            Technique:
          </span>
          Get unstuck from the trauma of your past so you can move forward into
          abundant life.
        </p>
        <p className="specialty-text">
          <span className="specialty-span">
            Trauma-Focused Cognitive Behavioral Therapy (TF-CBT):{" "}
          </span>
          Learn coping skills, relaxation skills, and new thought processes to
          cope with past trauma and present stressors Postpartum Depression and
          Anxiety/Maternal Mental Health Counseling If you are a new parent, I
          can help you to embrace your new identity so that you can thrive in
          your new life.
        </p>
        <p className="specialty-text">
          <span className="specialty-span">
            Postpartum Depression and Anxiety/Maternal Mental Health Counseling:
          </span>
          If you are a new parent, I can help you to embrace your new identity
          so that you can thrive in your new life.
        </p>
      </div>
      <div className="how-it-works">
        <h4 className="section-title">How Therapy Works</h4>
        <h5>1. Schedule your first session with me today!</h5>
        <p className="works-text">
          Call, text, or email me today. I’ll answer any questions you have and
          you can be sure we’re a good fit.
        </p>

        <h5>2. Get the support you need through</h5>
        <p className="works-text">
          Weekly or biweekly sessions. Join me each week to discuss what is most
          concerning to you. Together, we’ll develop the tools you need to feel
          more connected with yourself, with those around you, and with God.
        </p>

        <h5>3. Feel whole and connected again</h5>
        <p className="works-text">
          You can finally do the things you’ve been wanting to do all along-
          connect with your kids, your loved ones, and those around you instead
          of yelling at them or arguing with them. You can feel more connected
          and accepted, rather than feeling alone or judged. You can stop
          feeling controlled by your past and start moving forward into your
          abundant future. You’ll feel understood, and you’ll be ready to
          finally stop doing the things you said you wanted to stop doing, and
          start living the abundant life you want.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
