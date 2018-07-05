import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Map from "./Map";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Map />, document.getElementById("root"));
registerServiceWorker();
