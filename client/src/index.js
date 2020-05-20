import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit'
import configureStore from './redux/store/store'

// import rootReducer from './redux/reducers/reducer'
// import { render } from "react-dom";
import axios from "axios";
import "bulma/css/bulma.css";
import "./css/hover.css";
import "./css/App.css";
import "./css/index.css";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";

const store= configureStore()

//global axios defaults
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
axios.defaults.timeout = process.env.REACT_APP_REQUEST_TIMEOUT


const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('root')
  )
}


const renderSpinner = () => {
  ReactDOM.render(
    <></>
  )
}

renderApp()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(Main, renderApp)
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();