import React, { useState } from "react";

import Footer from "../../components/Footer";
import Users from "./Users";
import Pages from './Pages'
import Tabs from "../../components/Dashboard/tabs";

export default function AdminDashboard() {

  const [viewData, setViewData] = useState("users");

  return (
    <div className="App flex-col">
      <div className="flex-col top">
        <Tabs toggleNav={data => setViewData(data)} />
        <div
          className="tabs-container container is-fluid flex-col"
          style={{ background: "#F5F5F5", minHeight: "10vh" }}
        >
          {viewData === "users" ? (
            <Users />
          ) : viewData == "pages" ? (
            <Pages />
          ) : (
            <h1>All images</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
