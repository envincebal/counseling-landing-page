import React from "react";
import Photo from "../../img/Jessica Wong Headshots-7.jpg";
import { LinkContainer } from "react-router-bootstrap";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="section-container">
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
        <div className="img-div">
          <img className="about-img" src={Photo} alt="Jessica Wong" />
        </div>
        <div className="bio-details">
          <h1>Jessica Wong, LCSW (Licensed Clinical Social Worker)</h1>
          <h1>EMDR Therapist (Eye Movement Desensitization and Re-Processing)</h1>
          <p>Flash Technique Therapist</p>
        </div>
      </div>

      <div className="contact-me-now">
        <p>Have questions or want to set up an appointment? Click Below!</p>
        <LinkContainer to="/contact">
          <button className="contact-button">Contact Me</button>
        </LinkContainer>
      </div>
      <p>
        It’s time to stop thinking that you’re “crazy,” and it’s time to stop
        feeling alone.
      </p>
      <p>
        You remember a time when stress, anxiety, and loneliness weren’t the
        “norm” … but those days feel like a distant memory. Don’t you wish you
        had the tools to change that?
      </p>
      <h5 className="about-emphasis">You’ve come to the right place. </h5>
      <p>
        I’m Jessica, and I help adults just like you: ones that have it within
        them to feel at peace, whole, and connected again, but just need the
        support to get there.
      </p>
      <p>
        I help my clients find connection and meaning from what they’ve gone
        through in their pasts by equipping them with the tools they need to
        examine how those experiences can be viewed as strengths, so that their
        past no longer has a hold on them.
      </p>
      <p>
        Many of today’s solutions for trauma are either secular without actively
        incorporating your faith into your healing, or they are over-simplified
        and over-spiritualized solutions that feel too good to be true (i.e.
        “just pray and it will go away.”) This leads so many to feel like
        they’re doing it wrong, or that they are the only ones who feel the way
        they do. I know that your circumstances are unique, so I offer a warm,
        compassionate, and individualized approach based on your unique
        situation and goals.
      </p>
      <p>
        First, we examine different elements of your life, particularly in your
        past, that are causing you to feel stuck, anxious, or stressed right
        now. Then, we explore a treatment option that will that will be most
        effective for you in getting unstuck (see Specialty/Clinical Interests
        page [hyperlink] for more information). Through our work together,
        you’ll feel more understood, less stuck, and more free.
      </p>
      <h5 className="about-emphasis">
        I am dedicated to helping people break through their strongholds.
      </h5>
      <p>
        My training in trauma means I have the expertise you need and deserve in
        healing from your past. But at the end of the day, you want to know
        you’re working with someone who “gets” what it means to be an adult
        struggling with feeling stuck in old ways and patterns, right?
      </p>
      <p>
        I get it because I have devoted my career to working with trauma,
        faith-based concerns, and various other issues. I have also personally
        experienced healing both through the love and grace of Jesus, and also
        through my own personal experiences with some of the methods I currently
        use with my clients in sessions.
      </p>
      <p>
        I know that you are doing everything you can right now, but nothing
        seems to be working or helping. So when we work together, you won’t just
        get a trained therapist. You’ll get someone who truly understands what
        you’re going through.
      </p>
      <h2 className="education-experience-title">Experience & Education</h2>
      <div className="education-experience-div">
        <div className="education-div">
          <h4>Education</h4>
          <h5 className="education-experience-subtitle">Degrees</h5>
          <ul>
            <li>Master of Social Work: Hawaii Pacific University</li>
            <li>Bachelor’s of Arts: University of Oregon</li>
          </ul>
          <h5 className="education-experience-subtitle">Licensure</h5>
          <ul>
            <li>LCSW-4450: Licensed Clinical Social Worker</li>
          </ul>
          <h5 className="education-experience-subtitle">Certifications</h5>
          <ul>
            <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
            <li>The Flash Technique </li>
            <li>TF-CBT (Trauma-Focused Cognitive-Behavioral Therapy)</li>
            <li>Maternal Mental Health Professional Certificate</li>
          </ul>
          <h5 className="education-experience-subtitle">Other</h5>
          <ul>
            <li>Member of New Hope Leeward</li>
          </ul>
        </div>
        <div className="experience-div">
          <h4>Experience</h4>
          <h5 className="education-experience-subtitle">
            Professional Experience
          </h5>
          <ul>
            <li>Child Abuse and Neglect</li>
            <li>Childhood Trauma</li>
            <li>Sexual Abuse: Both in Childhood and Adulthood</li>
            <li>Combat-Related Trauma</li>
            <li>Domestic Violence</li>
            <li>Postpartum/Perinatal Mood Disorders</li>
            <li>Severe and Persistent Mental Illnesses (SPMI)</li>
            <li>Houselessness/Homelessness</li>
            <li>Children with Special Needs</li>
            <li>Life Transitions</li>
            <li>Relationship Issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
