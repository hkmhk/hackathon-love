import React, { Component } from 'react';
import { ButtonPage } from '../assets/js/styled';

class PageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touch: false,
      color: '',
      text: '',
    };
    this.touch = this.touch.bind(this);
  }

  touch() {
    this.setState({
      touch: this.state.touch ? false : true,
      color: this.state.touch ? '' : '#070048',
      text: this.state.touch ? '' : 'white',
    });
  }

  render() {
    return (
      <ButtonPage
        onClick={this.props.func ? this.props.func : this.touch}
        marg={this.props.marg}
        couleur={this.state.color ? this.state.color : this.props.couleur}
        colorText={this.state.text ? this.state.text : this.props.colorText}
        wth={this.props.wth}
        hth={this.props.hth}
        value={this.state.color}
      >{this.props.text}</ButtonPage>

    );
  }
}

export default PageButton;
