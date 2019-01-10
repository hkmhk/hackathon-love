import React, { Component } from 'react';
import BarreMenu from './ProfileUser';

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BarreMenu {...this.props}/>
      </div>
    );
  }
}

export default Match;
