import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Index from "../../containers/Index";
import MyPage from "../../containers/MyPage";
import BookDetailPage from "../main/BookDetailPage";
import BookAddPage from "../main/BookAddPage";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/myPage" component={MyPage}/>
                    <Route exact path="/books/new" component={BookAddPage}/>
                    <Route exact path="/books/:bookId" component={BookDetailPage}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
