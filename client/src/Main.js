import React from "react"
import { useSelector } from 'react-redux'


import Home from './containers/Home';
import Collections from './components/Collections'
import Contact from './containers/Contact'
import About from './containers/About'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard/Dashboard'

import {
  Switch,
	Route,
	Router
} from "react-router-dom";

import history from './redux/store/history'




export default function Main() {
	const authenticated = useSelector(state => state.auth.authenticated)

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
				<Route path="/users/dashboard">
					{
						authenticated ? <Dashboard   /> : <Login />
					}
				</Route>
				<Route path="/v1/login" component={Login} />
      </Switch>
    </Router>
  );
}
