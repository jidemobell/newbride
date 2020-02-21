import React from "react";

import Header from "../components/Headers/Header";
import Footer from "../components/Footer";

import workroom from "./../images/workroom.jpeg";

export default function Contact() {
  return (
    <div className="App flex-col">
      <div className="top flex-col">
        <Header />
        <section className="flex-col center" style={{marginTop:"50px"}}>
          <p className="abel inquiries">FOR GENERAL INQUIRIES: 555 555 555</p>
          <div
            className="flex-row"
            style={{
              width: "50vw",
							justifyContent: "space-between",
							height: "100%"
            }}
          >
            <img
              src={workroom}
              alt="workroom"
              style={{
                margin: "20px",
								width: "250px",
								// flexGrow: "1",
								// flexShrink: "1",
              }}
            />
            {/* <div > */}
            <form
              className="flex-col contact"
              style={{
                // padding: "10px",
								marginTop: "20px",
								flexGrow: "1",
								flexShrink: "1",
								padding: "unset"
              }}
            >
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea type="text" />
              <button type="submit" >SUBMIT</button>
              {/* <button type="submit" >SUBMIT</button> */}
            </form>
            {/* </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
