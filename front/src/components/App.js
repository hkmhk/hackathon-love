import React, { Component } from 'react';
import { TitleMain, NameCharacter } from '../assets/js/styled'



import routes from '../routes';


class App extends Component {



  render() {

    return (
      <div>
        {routes()}
      </div>
    );
  }
}

export default App;

