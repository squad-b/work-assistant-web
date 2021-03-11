import React from "react";
import BookListSection from "../../components/main/BookListSection";
import Layout from "../../components/common/Layout";
import Login from "../../containers/Login";
import WelcomeSection from "../../components/main/WelcomeSection";

class Index extends React.Component {

  needLogin = () => {return this.props.user === null;}

  renderLoginPage = () => {return <Login />}

  renderMainPage = () => {
    return (
      <Layout>
        <WelcomeSection/>
        <BookListSection/>
      </Layout>
    );
  }

  render() {
    return (
      <div>
        {this.needLogin() ? this.renderLoginPage() : this.renderMainPage()}
      </div>
    );
  }
}

export default Index;