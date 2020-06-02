import React from "react";
import { Link } from "react-router-dom";



export default function CollectionHeader() {
  return (
    <header className="flex-row">
      <section className="flex-col center" style={{ marginTop: "-10px" }}>
        <h1 className="flex-row sacramento">
          <hr style={{ width: "50px", marginTop: "40px" }} />
          <span style={{ fontSize: "50px", fontWeight: "100", margin: "none" }}>
            Collections
          </span>
          <hr style={{ width: "60px", marginTop: "40px" }} />
        </h1>
      </section>
      <nav className="flex-row app-navs sanser" >
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
          <span className="first-border">About</span>
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
