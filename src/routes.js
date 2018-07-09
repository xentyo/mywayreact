import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import About from "./Components/About";
import Sign from "./Components/Sign";
import Login from "./Components/Login";
import Map from "./Components/Map";

const AppRoutes = () => (
  <About>
    <Switch>
      <Route exact path="/sign" component={Sign} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/map" component={Map} />
    </Switch>
  </About>
);

export default AppRoutes;
