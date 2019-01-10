import React, { Component } from 'react';
import SimpleSlider from '../components/SimpleSlider';

class Inscription extends Component {
  render() {
    return (
      <div>
        <SimpleSlider history={this.props.history} />
      </div>
    );
  }
}

export default Inscription;
