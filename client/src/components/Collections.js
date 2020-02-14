import React from "react";
// import Header from "./Headers/Header";
import CollectionHeader from "./Headers/CollectionHeader";

import Slot from "../components/slot";
import Footer from "./Footer"

import wedding2 from '../images/wedding-2.jpg'
import wedding3 from '../images/wedding-3.jpg'
import wedding4 from '../images/woman-4.jpg'
import wedding5 from '../images/wedding-4.jpg'
import wedding6 from '../images/wedding-5.jpg'
import wedding7 from '../images/wedding-6.jpg'


const weddings = [
	// wedding1,
	wedding2,
	wedding3,
	wedding4,
	wedding5,
	wedding6,
	wedding7
]

// import { weddings } from "../images/imager";

export default function Collection() {
  return (
    <div className="App flex-col">
      <div className="top flex-col">
        <CollectionHeader />
        <section
          style={{ padding: "10px 40px", flexWrap: "wrap", boxSizing: "content-box" }}
          className="flex-row center"
        >
          {weddings.map(wedding => {
            return <Slot pic={wedding} />;
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}
