import React from "react";
import { Link } from "react-router-dom";

// import brand from "../../images/big_m.png";

export default function CollectionHeader() {
  return (
    <header className="flex-row">
      {/* <div>
        <img src={brand} id="brand" alt="brand" />
      </div> */}
			<section className="flex-col center" style={{marginTop: "-10px" }}>
          <h1 className="flex-row sacramento">
            <hr style={{ width: "60px", marginTop: "40px" }} />
            <span style={{ fontSize: "60px", fontWeight: "100" }}>Collections</span>
            <hr style={{ width: "60px", marginTop: "40px" }} />
          </h1>
        </section>
      <nav className="flex-row app-navs sanser" style={{marginTop: "20px" }}>
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
          <span className="first-border">Contact</span>
        </li>
      </nav>
    </header>
  );
}