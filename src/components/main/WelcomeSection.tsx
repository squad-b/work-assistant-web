import "./welcome-section.scss";

import React from "react";
import welcome from "../../assets/img/welcome.png";

class WelcomeSection extends React.Component {
  public render() {
    return (
      <div className="main-welcome">
        <img src={welcome} alt="아고 어서와" className="ago-img"/>
      </div>
    );
  }
}

export default WelcomeSection;