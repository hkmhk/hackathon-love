import React, { Component } from 'react';
import SliderCard from '../components/SliderCard';

import PageFilter from '../components/PageFilter';
import BarreMenu from '../components/BarreMenu';

import { getRandomInt } from '../assets/js/lib';

import { getData } from '../assets/js/axios';
import { checkUser } from '../assets/js/authFirebase';
import Firebase from '../auth';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      user: {},
    };
  }

  componentWillMount() {
    getData('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json').then(res => {
      console.log(typeof res);
      const characters = res.map(el => {
        el.age = getRandomInt(20, 50);
        return el;
      });
      this.setState({ characters });
    });
  }

  async componentDidMount() {
    const user = await checkUser();
    if (user) {
      Firebase.database().ref(`${user.uid}/`).once('value').then(snap => this.setState({ user: snap.val() }));
    } else {
      this.props.history.push('/login');
    }

  }

  render() {

    return (
      <div>
        <PageFilter />
        <SliderCard characters={this.state.characters} />
        <BarreMenu {...this.props} />
      </div>
    );

  }
}

export default Main;
