import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Routes
import registerServiceWorker from "./registerServiceWorker";
import AppRoutes from "./routes";

//Assets
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
