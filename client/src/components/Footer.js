import React from "react";

import instagram from "../images/ig2.svg"
import facebook from "../images/fb.svg"

export default function Footer() {
  return (
    <footer className="flex-row">
      <span id="copyright">
        &copy; 2020 Bridal. All right reserved
      </span>
      <nav className="flex-row">
        <img src={instagram} alt="instagram" className="social" />
        <img src={facebook} alt="facebook" className="social" />
      </nav>
    </footer>
  );
}
