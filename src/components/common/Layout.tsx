import "./base.scss";

import React, { FC } from "react";

import {Container} from "@material-ui/core";
import Footer from "./Footer";
import NavBar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
  },
}));
const Layout:FC<any> =(props:any)=>{


    return (
      <div>
        <NavBar/>
          <Container className={useStyles(props.theme).container}>
          {props.children}
          </Container>
        <Footer/>
      </div>
    );
}

export default Layout;