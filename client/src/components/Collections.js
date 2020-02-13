import React from "react";
// import Header from "./Headers/Header";
import CollectionHeader from "./Headers/CollectionHeader";

import Slot from "../components/slot";
import Footer from "./Footer"

import { weddings } from "../images/imager";

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
