import React from "react";
import Logo from "../../img/logo.png";
import Photo from "../../img/photo.jpg";
import { LinkContainer } from "react-router-bootstrap";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="section-container">
      <div className="logo-div">
        <img className="logo" src={Logo} alt="DaVine Counseling" />
      </div>
      <div className="home-header">
        <h4>Trauma Therapy and Faith-Based Christian Counseling in Hawaii</h4>
        <h5>
          Make Peace with Your Past So You Can Move into an Abundant Future
        </h5>
      </div>
      <h5 className="greeting">Does this sound familiar?</h5>
      <div className="intro-section">
        <div className="photo-div">
          <img className="photo" src={Photo} alt="Jessica Wong" />
        </div>
        <div className="intro-text">
          <p>
            You want to get past your past and have healthy interactions with
            those you love, but instead you keep telling yourself:
          </p>
          <ul>
            <li>Something is wrong with me; I’m doing it wrong</li>
            <li>Why can’t I just get it together and move on?</li>
            <li>
              I keep trying to change and I want to change, but I just can’t
              seem to do it
            </li>
            <li>
              “I’m going to stop (doing X, Y and Z).” But somehow you just can’t
              stop, and you
            </li>
            <li>
              keep repeating these patterns despite your best efforts to change
              them
            </li>
            <li>I’m alone in all of this- nobody gets me</li>
            <li>
              I have to figure it all out myself, I can’t depend on anyone else
              because they’re just going to let me down or reject me
            </li>
            <li>Other people have it worse- why am I overreacting?</li>
            <li>
              I have to stay strong for everyone around me (even though I’m
              crumbling inside, and I feel alone and misunderstood)
            </li>
            <li>
              I know I can mentally get over this, but for some reason I just
              can’t
            </li>
          </ul>
        </div>
      </div>
      <div className="summary-paragraph">
        <p className="greeting">Hi, I’m Jessica, and I can help!</p>
        <p>
          I provide trauma therapy using a warm and welcoming approach. I am
          trained in Eye Movement Desensitization and Reprocessing (EMDR), the
          Flash Technique (FT), Trauma-Focused Cognitive-Behavioral Therapy
          (TF-CBT), person-centered therapy, and other methods. I also offer
          faith-based Christian counseling to those who are interested in
          incorporating their Christian faith into their therapy sessions. My
          clients walk away from therapy with me feeling understood, connected,
          whole, and with greater insights into themselves, their relationships
          with those around them, and their relationships with Jesus.
        </p>
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
          <LinkContainer to="/fbcc">
            <span className="specialty-span">
              Faith-Based Christian Counseling
            </span>
          </LinkContainer>:{" "}
          Allow Jesus to be the source of your healing so that you can feel more
          connected to Him, to those around you, and to the core of who you are
          so that you can feel whole again. “I sought the Lord, and He answered
          me, and delivered me from all my fears. They looked to Him and were
          radiant, and their faces will never be ashamed.”{" "}
          <span className="verse">-Psalms 34:4-5</span>
        </p>
        <p className="specialty-text">
          <LinkContainer to="/emdr">
            <span className="specialty-span">
              Eye Movement Desensitization and Reprocessing (EMDR) &The Flash
              Technique
            </span>
          </LinkContainer>:{" "}
          Get unstuck from the trauma of your past so you can move forward into
          abundant life.
        </p>
        <p className="specialty-text">
          <LinkContainer to="/tfcbt">
            <span className="specialty-span">
              Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)
            </span>
          </LinkContainer>:{" "}
          Learn coping skills, relaxation skills, and new thought processes to
          cope with past trauma and present stressors Postpartum Depression and
          Anxiety/Maternal Mental Health Counseling If you are a new parent, I
          can help you to embrace your new identity so that you can thrive in
          your new life.
        </p>
        <p className="specialty-text">
          <LinkContainer to="/ppd">
            <span className="specialty-span">
              Postpartum Depression and Anxiety/Maternal Mental Health
              Counseling
            </span>
          </LinkContainer>:{" "}
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
