import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles/NavBar.css";

import Logo from "./components/Logo";
import SearchBar from "./SearchBar";
import Links from "./Links";

function NavBar({ setCardName }) {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [expandNavbar, setExpandNavbar] = useState(false);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="nav-bar" id={expandNavbar ? "open" : "close"}>
      <Logo currentRoute={currentRoute}/>
      {currentRoute === "/cardsList" && <SearchBar setCardName={setCardName} />}
      <Links currentRoute={currentRoute} setExpandNavbar={setExpandNavbar}  expandNavbar={expandNavbar}/>
    </nav>
  );
}

export default NavBar;
