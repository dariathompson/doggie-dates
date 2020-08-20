import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/user.png"
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <a href="/"><img src={image} alt="profile" /></a>
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text">
              <i className="material-icons">Doggy</i>
              Dates
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
