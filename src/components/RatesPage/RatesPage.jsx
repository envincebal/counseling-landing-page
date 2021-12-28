import React from "react";
import "./RatesPage.css";

const RatesPage = () => {
  return (
    <div className="section-container">
      <h3 className="section-title">Rates and Insurance</h3>
      <div className="insurance-container">
        <div className="insurance-accepted insurance">
          <h5 className="insurance-category">Insurance Plans I Currently Accept:</h5>
          <ul>
            <li>ALOHACARE QUEST</li>
            <li>
              HMAA/HWMG (Hawaii Medical Assurance Association/Hawaii Western
              Management Group)
            </li>
            <li>HMSA &amp; HMSA QUEST (Hawaii Medical Service Association)</li>
            <li>MEDICARE PART B</li>
            <li>OHANA HEALTH PLAN/WELLCARE</li>
            <li>UHA (University Health Alliance)</li>
            <li>UNITED HEALTHCARE/OPTUM (Quest, Commercial)</li>
            <li>SELF PAY/PRIVATE PAY ($150 per 50-57 minute session)</li>
            <li>TRIWEST</li>
          </ul>
        </div>
        <div className="soon-accepted insurance">
          <h5 className="insurance-category">Insurance Plans I Will Soon Accept:</h5>
          <ul>
            <li>KAISER</li>
            <li>TRICARE</li>
          </ul>
        </div>
        <div className="insurance-questions insurance">
          <h5 className="insurance-category">
            Questions to Ask Your Insurance Plan Prior to Starting Therapy
            Sessions:
          </h5>
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
