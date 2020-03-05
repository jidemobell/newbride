import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Footer from "../../components/Footer";
import Users from "./Users";
import Pages from "./Pages";
import Images from "./images";
import Tabs from "../../components/Dashboard/tabs";
import Header from "../../containers/Headers/AdminHeader";
import { fetchImages } from "../../redux/actions/images";
import { SET_ERROR, LIST_USERS } from "../../redux/constants";

export default function AdminDashboard() {
  const [viewData, setViewData] = useState("users");
  const dispatch = useDispatch();
  const { username } = Object(useSelector(state => state.users.user));
  const imgArray = useSelector(state => state.image.images);
  const allUsers = useSelector(state => state.users.users);

  useEffect(() => dispatch(fetchImages()), []);
  useEffect(() => {
    (async () => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(`/users/list`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({
          type: LIST_USERS,
          payload: {
            users: response.data
          }
        });
      } catch (error) {
        dispatch({
          type: SET_ERROR,
          payload: error
        });
      }
    })();
  }, []);

  return (
    <div className="App flex-col">
      <Header user={username} />
      <div className="flex-col top">
        <Tabs toggleNav={data => setViewData(data)} />
        <div
          className="tabs-container container is-fluid flex-col"
          style={{ background: "#F5F5F5", minHeight: "10vh" }}
        >
          {viewData === "users" ? (
            <Users users={allUsers} />
          ) : viewData === "pages" ? (
            <Pages />
          ) : (
            <Images imageGallery={imgArray} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
