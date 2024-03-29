import "./footer.scss";

import React from "react";
import githubIcon from "../../assets/img/github.png";

class Footer extends React.Component<any> {
  private icons:any[];
  constructor(props:any) {
    super(props);
    this.icons = [
        {
          name: "GitHub",
          imgPath: githubIcon,
          url: "https://github.com/squad-b",
        },
      ]
    }

  public render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          {this.icons.map((icon, i) => (
            <a href={icon.url} key={i}>
              <img className="footer-icon" src={icon.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="inquire">
          <p>문의) people@miridih.com</p>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2021 Squad-B</p>
        </div>
      </div>
    );
  }
}

export default Footer;