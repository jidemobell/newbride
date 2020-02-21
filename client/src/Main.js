import React from "react";

import Home from './containers/Home';
import Collections from './components/Collections'
import Contact from './containers/Contact'
import About from './containers/About'
import Login from './containers/Login'

import {
	BrowserRouter,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/v1/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
