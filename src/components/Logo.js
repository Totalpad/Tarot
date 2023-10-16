import React from "react";
import LogoIcon from '../Assets/logo.png'

function Logo() {
  return (
    <div className="logo">
      <img src={LogoIcon} alt="logo" />
      <h1>TarotCards</h1>
    </div>
  );
}

export default Logo;
