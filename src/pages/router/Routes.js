import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Index from "../main/Index";
import BookPage from "../main/BookPage";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Index} />
          <Route exact path="/books/:bookId" component={BookPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
