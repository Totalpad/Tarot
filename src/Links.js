import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Links({expandNavbar, currentRoute, setExpandNavbar }) {
  return (
    <div className="right-side">
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <FaTimes /> : <FaBars />} 
        </button>
        
      </div>
      <div className="links">
        <Link
          className={currentRoute === "/" ? `text-red ` : `link-text`}
          to="/"
        >
          Головна
        </Link>
        {/* <div className="Row" /> */}
        <Link
          className={currentRoute === "/cardsList" ? `text-red ` : `link-text`}
          to="/cardsList"
        >
          Список карт
        </Link>
        {/* <div className="Row" /> */}
        <Link
          className={
            currentRoute === "/randomCards" ? `text-red ` : `link-text`
          }
          to="/randomCards"
        >
          Гадання
        </Link>
      </div>
    </div>
  );
}

export default Links;
