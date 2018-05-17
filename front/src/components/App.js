import React, { Component } from 'react';
import { getData } from '../assets/js/axios';
import PageButton from './PageButton'




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
        <PageButton text="Connexion" />
        <PageButton couleur='linear-gradient(to right, #673AB7 0%, #512DA8 51%, #673AB7 100%)' colorText="white" text="Inscription" />

      </div>
    );
  }
}

export default App;
