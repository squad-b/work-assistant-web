import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Index from "../main/Index";
import BookDetailPage from "../main/BookDetailPage";
import BookAddPage from "../main/BookAddPage";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Index} />
          <Route exact path="/books/new" component={BookAddPage} />
          <Route exact path="/books/:bookId" component={BookDetailPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
