import React, { Component } from 'react';
import '../assets/css/index.css';
import {getData} from '../assets/js/axios';
import Input from './Input'; 


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
        <Input type='email' placeholder='Email' />
        <Input type='text' placeholder='Nom' />
        <Input type='password' placeholder='Mot de passe' />
        <Input type='text' placeholder='Galaxie' />
        {/* */}
        
      </div>
    );
  }
}

export default App;
