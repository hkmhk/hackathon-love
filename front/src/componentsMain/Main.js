import React, { Component } from "react";
import BarreMenu from "../components/BarreMenu";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BarreMenu />
      </div>
    );
  }
}

export default Main;
