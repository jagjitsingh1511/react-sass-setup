import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Home from "layout/Home";

const routes = (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default routes;
