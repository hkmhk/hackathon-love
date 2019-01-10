import React, { Component } from 'react';
import { Icon, LogoImg, TitleMain } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import robot from '../assets/images/robot_logo.png';
import PageFilter from '../components/PageFilter';
import PageButton from '../components/PageButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <LogoImg>
          <img src={robot} alt={robot} style={{ maxWidth: '100%' }} />
        </LogoImg>
        <TitleMain>ONE Love <br />MANY Galaxies</TitleMain>
        <Icon id="buttonFiltre">
          <FontAwesomeIcon icon={['far', 'heart']} style={{ color: 'white' }} size="3x" />
        </Icon>
        <div style={{ position: "absolute", top: '50px', left: '50%', transform: 'translateX(-50%)'}}>
          <PageButton func={() => this.props.history.push('/login')} wth="10rem" hth="2rem" text="Connexion" />
        </div>
      </div>
    );
  }
}

export default Home;
