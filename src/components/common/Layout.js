import React from "react";
import NavBar from "./Navbar";
import "./base.scss";
import Footer from "./Footer";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.success.main,
  },
}));

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div>
        <NavBar/>
          <Container className={useStyles.container}>
          {this.props.children}
          </Container>
        <Footer/>
      </div>
    );
  }
}

export default Layout;