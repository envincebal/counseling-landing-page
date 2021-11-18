import React from 'react';
import Logo from "../../img/logo.png";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="logo-div">
        <img className="logo" src={Logo} alt="logo" />
      </div>
    </div>
  )
};


export default HomePage
