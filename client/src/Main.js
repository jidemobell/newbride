import React, {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'

import ProtectedRoute from "./components/Resusable/ProtectedRoute";
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
	Redirect
} from "react-router-dom";


export default function Main() {
	const isAuthenticated = useSelector(state => state.auth.authenticated)
	const stateUser = useSelector(state => state.users.user)
	const dispatch = useDispatch()
	stateUser !== null || stateUser !== undefined &&  console.log("is it authenticated", stateUser.username)

  useEffect(() => {
		 dispatch(getUser())
	}, [isAuthenticated])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
				<Route path="/users/dashboard">
					{
						stateUser !== null || stateUser !== undefined ? <Dashboard  /> : <Redirect to='/v1/login' />
					}
				</Route>
				<ProtectedRoute  
					path='/v1/login'
					redirectTo={'/users/dashboard'}
					component={Login}
				/>	 
      </Switch>
    </BrowserRouter>
  );
}
