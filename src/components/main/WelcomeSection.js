import React from "react";
import welcome from "../../assets/img/welcome.png";
import "./welcome-section.scss"

class WelcomeSection extends React.Component {
  render() {
    return (
      <div className="main-welcome">
        <img src={welcome} alt="" />
      </div>
    );
  }
}

export default WelcomeSection;