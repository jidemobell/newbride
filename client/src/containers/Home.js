import React from "react";

import signature from "../images/big_sign.png";
// import design from "./images/cropped-bridals.png";
// import instagram from "../images/ig2.svg";
// import facebook from "../images/fb.svg";
import woman from "../images/woman.jpg";

import Header from "../components/Headers/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App flex-col">
      <section className="top flex-col">
        <Header />
        {/* app hero */}
        <section className="hero flex-row">
          <img src={woman} id="design" alt="design" />

          <div className="flex-col hero-message center">
            <span className="flex-row">
              <hr />
              <span id="hero-style">Stylish</span>
              <hr />
            </span>
            <p> CUSTOM BRIDAL </p>
            <a href="http://fakelink"> BOOK AN APPOINTMENT </a>
            <div>
              <img
                src={signature}
                id="signature"
                className="shrink"
                alt="signature"
              />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
