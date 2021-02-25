import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "../main/Index";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Index} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
