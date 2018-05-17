import React, { Component } from 'react';
import { LogoImg, Icon } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { getData } from '../assets/js/axios';
import robot from '../assets/images/robot_logo.png';
import PageButton from '../components/PageButton'
import Input from '../components/Input';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <LogoImg>
                    <img src={robot} alt={robot} style={{ maxWidth: "100%" }} />
                </LogoImg>
                <div className="row justify-content-center">
                    <Input />
                </div>
                <PageButton text="Connexion" />
                <PageButton text="Inscription" />
            </div>
        );
    }
}



export default Login;