import React from "react";

import Home from './components/Home';
import Collections from './components/Collections'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/collections" component={Collections} />
        <Route path="/contact" component={Contact} />
      </switch>
    </Router>
  );
}
