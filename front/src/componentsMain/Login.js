import React, { Component } from 'react';
import { LogoImg, Icon } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { getData } from '../assets/js/axios';
import robot from '../assets/images/robot_logo.png';
import PageButton from '../components/PageButton'

class Login extends Component {
    render() {
        return (
            <div>
                <LogoImg>
                    <img src={robot} alt={robot} style={{ maxWidth: "100%" }} />
                </LogoImg>
                <PageButton text="Connexion" />
                <PageButton text="Inscription" />

            </div>
        );
    }
}



export default Login;