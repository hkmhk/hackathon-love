import React, { Component } from 'react';
import {getData} from '../assets/js/axios';


import {getRandomInt} from '../assets/js/lib';

import routes from '../routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[]
    }
  }
  

  componentWillMount() {
    getData("https://akabab.github.io/starwars-api/api/all.json").then(res => {
      const characters = res.map(el => {
        el.age = getRandomInt(20,50);
        return el;
      })
      this.setState({characters})
    });
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

