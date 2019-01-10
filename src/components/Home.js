import React, { Component } from 'react';
import { MainContainer, TitleMain } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Home extends Component {

  render() {
    return (
      <MainContainer>
        <TitleMain>ONE love <br /> MANY Galaxies</TitleMain>
        <FontAwesomeIcon icon={['far', 'heart']} size="4x" style={{ color: 'white' }} />
        <FontAwesomeIcon icon="thumbs-up" size="2x" style={{ color: 'white' }} />
        <FontAwesomeIcon icon="thumbs-down" size="2x" style={{ color: 'white' }} />
      </MainContainer>
    );
  }
}

export default Home;
