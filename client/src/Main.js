import React from "react"
import { useSelector } from 'react-redux'


import Home from './containers/Home';
import Collections from './components/Collections'
import Contact from './containers/Contact'
import About from './containers/About'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard/Dashboard'
import  PrivateRoute from './components/Resusable/PrivateRoute'
import  PublicRoute from './components/Resusable/PublicRoute'

import {
  Switch,
	Router
} from "react-router-dom";

import history from './redux/store/history'


export default function Main() {
	const authenticated = useSelector(state => state.auth.authenticated)

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/collections" component={Collections} />
        <PublicRoute path="/contact" component={Contact} />
        <PublicRoute path="/about" component={About} />
        <PublicRoute  path="/v1/login" component={Login} />
        <PrivateRoute path="/users/dashboard" component={Dashboard} isAuthenticated={authenticated}  redirectPath={"/v1/login"}/>
      </Switch>
    </Router>
  );
}
