import React, { useContext } from "react";
import AdminHeader from "../components/Headers/AdminHeader";
import Footer from "../components/Footer";

// import { stateContext } from '../store/index'

function toggleNav (){
	return null
}


export default function AdminDashboard() {
	// const {state} = useContext(stateContext)

  return (
    <div className="App flex-col">
      <div className="flex-col top">
        {/* <AdminHeader user={"Admin"} /> */}
        <nav className="top-navs flex-row">
          <li className="white" onClick={toggleNav}>
            <span>users</span>
          </li>
          <li className="black" onClick={toggleNav}>
            <span>pages</span>
          </li>
          <li className="black" onClick={toggleNav}>
            <span>images</span>
          </li>
        </nav>
        <div>
          <h1>welcome {"Admin"}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
