import React from "react";
import { Link } from "react-router-dom";

import brand from "../../images/big_m.png";

export default function Header() {
  return (
    <header className="flex-row">
      <div>
        <img src={brand} id="brand" alt="brand" />
      </div>
      <nav className="flex-row app-navs sanser">
        <li className="flex-row hvr-grow">
          <Link to="/" className="navlink">
            <span className="first-border">Home</span>
          </Link>
        </li>
        <li className="flex-row hvr-grow">
          <Link to="/collections" className="navlink">
            <span className="first-border">Collections</span>
          </Link>
        </li>
        <li className="flex-row hvr-grow">
          <Link to="/about" className="navlink">
            <span className="first-border">About</span>
          </Link>
        </li>
        <li className="flex-row hvr-grow">
          <Link to="/contact" className="navlink">
            <span className="first-border">Contact</span>
          </Link>
        </li>
      </nav>
    </header>
  );
}
