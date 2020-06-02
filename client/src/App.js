import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Switch,
  Route,
  BrowserRouter,
  // Redirect,
  // Router
} from "react-router-dom";

import ProtectedRoute from "./components/Resusable/ProtectedRoute";
import Home from "./containers/Home";
import Collections from "./components/Collections";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import { getUser } from "./redux/actions/user";

// import history from "./redux/store/history";

export default function App() {
  const  token  = localStorage.getItem("token");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const error = useSelector((state) => state.error.error);
  console.log("app error", error);
  console.log("app user", user);

  const [appUser ] = useState(user)

  function initUser(){
    if(token){
      getUser()
    }
  }

  initUser()

   useEffect(() => {
    dispatch(getUser())
   }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        {/* <Route path="/users/dashboard">
					{
						isAuthenticated ? <Dashboard   /> : <Login />
					}
				</Route>
				<Route path="/v1/login" component={Login} /> */}
        <ProtectedRoute
          path="/v1/login"
          redirectIf={appUser}
          redirectTo={'/users/dashboard'}
          component={Login}
        />
        <ProtectedRoute
          path="/users/dashboard"
          redirectIf={!appUser}
          redirectTo={'/v1/login'}
          component={Dashboard}
        />
        {/* <Route path="/users/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
}
