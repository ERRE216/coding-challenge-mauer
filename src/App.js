import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Details from "./views/Details";

export default function App() {
  return (
    <Router forceRefresh={true}>
      <Navigation />
      <Switch>
        <Route path='/details/:id'>
          <Details />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
