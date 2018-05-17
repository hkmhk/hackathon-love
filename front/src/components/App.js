import React, { Component } from 'react';
import {getData} from '../assets/js/axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[]
    }
  }
  

  componentWillMount() {
    getData("https://akabab.github.io/starwars-api/api/all.json").then(characters => this.setState({characters}));
  }


  render() {

    return (
      <div>
       
      </div>
    );
  }
}

export default App;
