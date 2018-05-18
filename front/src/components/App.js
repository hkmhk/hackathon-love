import React, { Component } from 'react';
import { getData } from '../assets/js/axios';

import PageButton from './PageButton'
import Input from './Input'; 

import firebase from 'firebase';
import { config } from '../auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }


  componentWillMount() {
    
    getData("https://akabab.github.io/starwars-api/api/all.json").then(characters => this.setState({ characters }));
  }


  render() {

    return (
      <div>
        {routes()}
      </div>
    );
  }
}

export default App;
