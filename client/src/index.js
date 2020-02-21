import React from "react";
import { render } from "react-dom";
import axios from "axios";
import "./css/hover.css";
import "./css/App.css";
import "./css/index.css";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";

import { Store } from "./store/index";

//global axios defaults
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:5000";

const renderApp = () => {
  render(
    <Store>
      <Main />
    </Store>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept(Main, renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
