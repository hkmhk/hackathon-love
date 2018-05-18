import React, { Component } from 'react';
import { LogoImg, Icon, TitleMain } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import robot from '../assets/images/robot_logo.png';
import PageFilter from '../components/PageFilter'


class Home extends Component {

    render() {


        return (
            <div>

                <LogoImg>
                    <img src={robot} alt={robot} style={{ maxWidth: "100%" }} />
                </LogoImg>
                <TitleMain>ONE Love <br />MANY Galaxies</TitleMain>
                <Icon id="buttonFiltre">
                    <FontAwesomeIcon icon={['far', 'heart']} style={{ color: "white" }} size="3x" />
                </Icon>
                <div>
                    <PageFilter id="filtre" />
                </div>
            </div>
        );
    }
}


export default Home;