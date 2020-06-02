import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'

import AuthRoute from "./components/Resusable/ProtectedRoute";
import Home from './containers/Home';
import Collections from './components/Collections'
import Contact from './containers/Contact'
import About from './containers/About'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard/Dashboard'
import {getUser} from './redux/actions/user'
import {
  Switch,
	Route,
	BrowserRouter,
	Redirect,
	Router
} from "react-router-dom";

import history from './redux/store/history'




export default function Main() {
	const authenticated = useSelector(state => state.auth.authenticated)
	// const stateUser = useSelector(state => state.users.user)
	const dispatch = useDispatch()
	// stateUser !== null || stateUser !== undefined &&  console.log("is it authenticated", stateUser.username)

	// console.log("states users", stateUser)

  // useEffect(() => {
	// 	 dispatch(getUser())
	// }, [isAuthenticated, dispatch])\

	console.log('athState', authenticated)

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
