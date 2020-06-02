import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../../components/Footer";
import Users from "./Users";
import Pages from "./Pages";
import Images from "./images";
import Tabs from "../../components/Dashboard/tabs";
import Header from "../../containers/Headers/AdminHeader";
import { getUser } from "../../redux/actions/user";

export default function Dashboard() {
  console.log('loading......')
  const [viewData, setViewData] = useState("users");
  const dispatch = useDispatch()
  const stateUser = Object(useSelector((state) => state.users.user));


  useEffect(() => {
		dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App flex-col">
      <Header
        user={stateUser !== null || undefined ? stateUser.username : ""}
      />
      <div className="flex-col top">
        <Tabs toggleNav={(data) => setViewData(data)} />
        <div
          className="tabs-container container is-fluid flex-col"
          style={{ background: "#F5F5F5", minHeight: "10vh" }}
        >
          {viewData === "users" ? (
            <Users />
          ) : viewData === "pages" ? (
            <Pages />
          ) : (
            <Images />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
