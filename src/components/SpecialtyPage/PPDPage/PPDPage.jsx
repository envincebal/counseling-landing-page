import React from "react";
import "./PPDPage.css";
import { LinkContainer } from "react-router-bootstrap";
      <div className="contact-me-now">
        <p>Have questions or want to set up an appointment? Click Below!</p>
        <LinkContainer to="/contact">
        <button className="contact-button">Contact Me</button>
        </LinkContainer>
      </div>
const PPDPage = () => {
  return (
    <div className="section-container">
      <h3 className="section-title">
        Postpartum Depression and Anxiety/
      </h3>
      <h3 className="section-title">Maternal Mental Health Counseling</h3>
      <h5 className="ppd-emphasis">
        Are you feeling overwhelmed and alone in a season that is supposed to
        feel joyful?
      </h5>
      <p>
        Maybe life with a baby is not what you expected it to look like, or
        perhaps you feel like no one around you understands the anguish you’re
        feeling. You may be feeling like you’re doing it wrong, or simply
        wondering if you’re fit to be a parent at all. Perhaps you’re feeling
        exhausted, defeated, and overwhelmed.
      </p>
      <p>
        Whatever it is that you’re experiencing, you’re beginning to notice the
        impact of this in every facet of your life:
      </p>
      <ul>
        <li>You no longer enjoy the things you used to enjoy</li>
        <li>You wonder if you’re overreacting</li>
        <li>
          You’re not enjoying many of these moments- despite everyone telling
          you to “enjoy every single moment”
        </li>
      </ul>
      <h5 className="ppd-emphasis">Therapy can help.</h5>
      <p>
        It may feel impossible now, but you can enjoy motherhood. You can feel
        like yourself again. You can feel normal and understood in the midst of
        everything you’re experiencing. And I can help you get there.
      </p>
      <p>
        Therapy for Postpartum Depression and Postpartum Anxiety helps you do 3
        things:
      </p>
      <ul>
        <li>
          Grieve the loss of your old self, your old life, and the way your
          relationships used to look so that you can honor those parts of your
          past while looking forward to a brighter future
        </li>
        <li>
          Recognize the positive ways in which you are changing in the midst of
          this challenging season
        </li>
        <li>
          Realize that you were meant to be your child’s parent, so you can stop
          doubting yourself and connect even more fully with your baby and with
          those around you.
        </li>
      </ul>
      <p>
        I’ll help through this process, tailoring each step to your unique needs
        and circumstances.
      </p>
      <p>
        You don’t have to live life feeling depressed, anxious, overwhelmed, or
        doubtful of yourself and your instincts.
      </p>
      <h5 className="ppd-emphasis">I can help you get there.</h5>
    </div>
  );
};

export default PPDPage;
