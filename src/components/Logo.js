import React from "react";
import LogoIcon from "../Assets/logo.png";
import { Link } from "react-router-dom";


function Logo({ currentRoute }) {
  return (
    <div className="logo">
      <Link className="doNotHide" to="/">  <img src={LogoIcon} alt="logo" /> </Link>
      <h1>TarotCards</h1>
      {currentRoute === "/cardsList" ? null : <h2>TarotCards</h2>}
    </div>

  
  );
}

export default Logo;
