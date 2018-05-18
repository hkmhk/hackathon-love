import React, { Component } from "react";
import { NavBar } from "../assets/js/styled";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
class BarreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar>
          <div className="container h-100">
            <div className="row h-100  align-items-center">
              <div className="col">
                <div className="row justify-content-center">
                  <FontAwesomeIcon icon="user" style={{ color: "#cf2dfb" }} />
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <FontAwesomeIcon icon="search" style={{ color: "#cf2dfb" }} />
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <FontAwesomeIcon icon="home" style={{ color: "#cf2dfb" }} />
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <FontAwesomeIcon icon="heart" style={{ color: "#cf2dfb" }} />
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <FontAwesomeIcon
                    icon="sign-out-alt"
                    style={{ color: "#cf2dfb" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default BarreMenu;
