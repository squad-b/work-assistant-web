import "./index.scss";

import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/router/Routes";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>
  , document.getElementById("root"));