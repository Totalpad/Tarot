import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <Link className="link-text" to="/">
        Головна
      </Link>
      <div className="Row" />
      <Link className="link-text" to="/cardsList">
        Список карт
      </Link>
      <div className="Row" />
      <Link className="link-text" to="/randomCards">
        Гадання
      </Link>
    </div>
  );
}

export default Links;
