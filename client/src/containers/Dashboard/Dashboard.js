import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'

import Footer from "../../components/Footer";
import Users from "./Users";
import Pages from './Pages'
import Images from "./images"
import Tabs from "../../components/Dashboard/tabs";
import Header from '../../containers/Headers/AdminHeader'
import {fetchImages } from '../../redux/actions/images'

export default function AdminDashboard() {
	const [viewData, setViewData] = useState("users");
	const dispatch = useDispatch()
	const { username } = Object(useSelector(state => state.users.user))
  const imgArray = useSelector(state => state.image.images)
	 
	useEffect(() => dispatch(fetchImages()), [])

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
            <Users />
          ) : viewData === "pages" ? (
            <Pages />
          ) : (
            // <Images imageArray={gallery} />
            <Images imageGallery={imgArray} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
