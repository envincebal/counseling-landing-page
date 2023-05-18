import React from "react";
import Emdria from "../../../img/emdria.png";
import "./EMDRPage.css";

const EMDRPage = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Eye Movement Desensitization</h2>
      <h2 className="section-title">and Reprocessing (EMDR)</h2>
      <h5 className="emdr-emphasis">
        Are old memories and experiences interfering with the life you want?
      </h5>
      <div className="emdr-emdria-img-div">
        <img className="emdr-emdria-img" src={Emdria} alt="Emdria logo" />
      </div>

      <p>
        Maybe you had a huge argument with someone you love deeply, or perhaps
        you find yourself pushing people away. You may be feeling stuck in old
        ways and old patterns, or simply wondering if it’s even worth it to get
        close to people at all anymore. Perhaps you’re feeling worthless or
        unlovable, and you can’t seem to envision a life that is free from these
        types of thoughts and feelings.
      </p>
      <p>
        Whatever it is that you’re experiencing, you’re beginning to notice the
        impact of this in every facet of your life:
      </p>
      <ul>
        <li>
          Your guilt and shame have felt overwhelming, and sometimes keep you up
          at night
        </li>
        <li>
          You’re repeating patterns from your past that you swore you would
          never repeat
        </li>
        <li>
          You can’t stop thinking about the painful memories you’ve been through
        </li>
      </ul>
      <h5 className="emdr-emphasis">EMDR and FT can help.</h5>
      <p>
        It may feel impossible now, but you can feel whole again. You can feel
        composed. You can feel in control of your thoughts, emotions, and
        memories. And I can help you get there.
      </p>
      <p>EMDR and FT helps you do 3 things:</p>
      <ul>
        <li>
          Process painful memories much more quickly than you would in
          traditional therapy, so that you can feel unstuck and free much more
          quickly
        </li>
        <li>
          Feel calmer and more at peace even when actively thinking about your
          past
        </li>
        <li>
          Feel even less triggered by every day events, so you can have
          healthier communication patterns with the people you love and care
          about the most
        </li>
      </ul>
      <p>
        I’ll help through this process, tailoring each step to your unique needs
        and circumstances. My approach to EMDR and FT comes from a place of awe:
        because I have seen people break free from lifelong traumatic memories
        in as little as 1-3 sessions.
      </p>
      <p>
        It’s time to break free from the trauma and the drama that hold you
        captive so that you can live in peace.
      </p>
      <h5 className="emdr-emphasis">I can help you get there.</h5>
      <h4 className="section-title">FAQs</h4>
      <div className="emdr-faq-section">
        <p>
          <span className="emdr-qa">Q: </span>What are EMDR and FT sessions
          like?
        </p>
        <p>
          <span className="emdr-qa">A: </span>We will start with several
          sessions of getting to know you, possibly utilizing TF-CBT or other
          forms of therapy. Then, I will ask you about specific components of a
          particularly disturbing memory. We will then begin “bilateral
          stimulation,” which involves me guiding you in moving your eyes back
          and forth as you process a memory. This helps the left and right
          hemispheres of your brain to form a more intimate connection so that
          the disturbing memory becomes less disturbing. It also helps your
          mind, emotions, and body to realize that this memory is in the past,
          and that the memory no longer has to be held at the forefront of your
          mind as a protective mechanism.
        </p>
        <p>
          While utilizing the Flash Technique (FT), however, you will not be
          asked to actively think of the disturbing memory. Instead, we will
          process a pleasant memory while briefly re-visiting the disturbing
          memory. This process takes place through a combination of talking and
          tapping.
        </p>
      </div>
      <div className="emdr-faq-section">
        <p>
          <span className="emdr-qa">Q: </span>How long do I need to be in
          therapy?
        </p>
        <p>
          <span className="emdr-qa">A: </span>For the length of time that feels
          most comfortable to you, because your needs come first and your
          situation is unique. Our sessions will typically last about 50-57
          minutes per session. They start at about once a week or once every
          other week so that we can get to know each other, and we meet less
          often over time as you and I see fit.
        </p>
      </div>
      <div className="emdr-faq-section">
        <p>
          <span className="emdr-qa">Q: </span>How do I know if EMDR or FT will
          work for me?
        </p>
        <p>
          <span className="emdr-qa">A: </span>While I can never guarantee the
          outcome of therapy for anyone, the fact that you have read this far
          shows how motivated you are to get unstuck from traumatic memories.
          Typically, traumatic memories are able to be processed much more
          quickly through EMDR and FT than through other methods of traditional
          therapy sessions. Sometimes, those memories (and the thoughts and
          feelings associated with those memories) can be resolved in as little
          as one session!
        </p>
      </div>
      <div className="emdr-faq-section">
        <p>
          <span className="emdr-qa">Q: </span>How do we get started?
        </p>
        <p>
          <span className="emdr-qa">A: </span>Feel free to call, text, or email
          me today to ask questions or to schedule your first session!
        </p>
      </div>
    </div>
  );
};

export default EMDRPage;
