import React, { useState, useContext } from "react";

import Footer from "../";
import logo from "./../images/only_M.svg";
import { stateContext } from "../store/index";
import { authActions } from "../store/actions/auth";

export default function Login() {
  const [username] = useState("");
  const [password] = useState("");
  const { dispatch } = useContext(stateContext);
  return (
    <div className="App flex-col">
      <div className="top flex-col center">
        <section className="flex-col center">
          <img src={logo} alt="logo" style={{ width: "10%" }} />
          <form
            className="flex-col contact login"
            style={{
              marginTop: "20px",
              flexGrow: "1",
              flexShrink: "1",
              padding: "unset",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              let dataArray =
                e.target.elements !== undefined && e.target.elements;
              let userData = {};
              [...dataArray]
                .map((element) => {
                  return element;
                })
                .filter((element) => {
                  return (
                    element.id !== "" && (userData[element.id] = element.value)
                  );
                });
              dispatch(authActions(userData));
              e.target.reset();
            }}
          >
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="sanser"
              defaultValue={username}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="sanser"
              defaultValue={password}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
