import React, { Component } from "react";
import { NavBar } from "../assets/js/styled";
import ReactDOM from "react-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCoffee from "@fortawesome/fontawesome-free-solid/faCoffee";

class BarreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}

export default BarreMenu;
