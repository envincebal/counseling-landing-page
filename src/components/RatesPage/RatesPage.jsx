import React from "react";
import "./RatesPage.css";

const RatesPage = () => {
  return (
    <div className="section-container">
      <h1 className="rates-title">RATES AND INSURANCE</h1>
      <div className="insurance-container">
        <div className="insurance-accepted insurance">
          <h3>Insurance Plans I Currently Accept:</h3>
          <ul>
            <li>ALOHACARE QUEST</li>
            <li>
              HMAA/HWMG (Hawaii Medical Assurance Association/Hawaii Western
              Management Group)
            </li>
            <li>UHA (University Health Alliance) </li>
            <li>SELF PAY/PRIVATE PAY ($150/one hour session)</li>
          </ul>
        </div>
        <div className="soon-accepted insurance">
          <h3>Insurance Plans I Will Soon Accept:</h3>
          <ul>
            <li> HMSA & HMSA QUEST (Hawaii Medical Service Association)</li>
            <li>KAISER</li>
            <li>MEDICARE</li>
            <li>OHANA HEALTH PLAN/WELLCARE</li>
            <li>TRICARE</li>
            <li>TRIWEST</li>
            <li>UNITED HEALTHCARE/BEACON</li>
          </ul>
        </div>
        <div className="insurance-questions insurance">
          <h3>
            Questions to Ask Your Insurance Plan Prior to Starting Therapy
            Sessions:
          </h3>
          <ul>
            <li>
              Do I have mental health insurance benefits under my insurance
              plan?
            </li>
            <li>What is my deductible and has it been met?</li>
            <li>How many sessions per year does my health insurance cover?</li>
            <li>
              What is the coverage amount per therapy session?/What is my
              expected co-pay?
            </li>
            <li>
              Is approval required from my primary care physician prior to
              starting therapy sessions?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;
