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
import {listCloudinaryPhotos } from "../../redux/actions/photos";
import {listPages } from '../../redux/actions/page';
import { SET_ERROR, LIST_USERS } from "../../redux/constants";

export default function AdminDashboard() {
  const [viewData, setViewData] = useState("users");
  const dispatch = useDispatch();
  const { username } = Object(useSelector(state => state.users.user));
  // const imgArray = useSelector(state => state.image.images);
	const cloudinaryArray = useSelector(state => state.photos.photos);
	const [cloudPhotos] = useState(cloudinaryArray)
	const allUsers = useSelector(state => state.users.users);
	const pages = useSelector(state => state.page.pages)

	// console.log("my pages", pages)

  useEffect(() => dispatch(fetchImages()), [dispatch]);
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
	}, [dispatch]);
	useEffect(() => dispatch(listPages()), [dispatch])
	useEffect(() => dispatch(listCloudinaryPhotos()), [dispatch, cloudPhotos])

	console.log('arrays',cloudinaryArray)

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
            <Pages pages={pages} />
          ) : (
						<Images 
							imageGallery={cloudinaryArray} 
						/>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
