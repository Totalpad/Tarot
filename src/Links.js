import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Links({ expandNavbar, currentRoute, setExpandNavbar }) {
  function getLinkClassName(targetRoute) {
    return currentRoute === targetRoute ? "text-red" : "link-text";
  }

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
        <Link className={getLinkClassName("/")} to="/">
          Головна
        </Link>

        <Link className={getLinkClassName("/cardsList")} to="/cardsList">
          Список карт
        </Link>

        <Link className={getLinkClassName("/randomCards")} to="/randomCards">
          Гадання
        </Link>
      </div>
    </div>
  );
}

export default Links;
