import React, { Component } from "react";

import routes from "../routes";
import { MainContainer } from "../assets/js/styled";

class App extends Component {
  render() {
    return <MainContainer>{routes()}</MainContainer>;
  }
}

export default App;
