import React from "react";

import Header from "./Headers/Header";
import Footer from "./Footer";

import group from "../images/group.jpg";

export default function About() {
  return (
    <div className="App flex-col">
      <div className="top flex-col">
        <Header />
        <section
          className="flex-col center"
          style={{ marginTop: "50px", padding: "20px 100px" }}
        >
          <div className="flex-row" style={{ height: "100%" }}>
            <img
              src={group}
              alt="group"
              style={{ width: "300px", margin: "0px 20px" }}
            />
           <div style={{textAlign: "left"}}>
              <span className="abel about" >
                We seek to design your fabric with you in mind, <br />
                We try to make ourclients see our basic services <br />
                in ways never seen before and by doing so, <br />
                we render the beautiful art of human beautification <br />a
                whole new different look and meaning.
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
