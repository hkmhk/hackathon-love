import React, { Component } from 'react';
import { LogoImg,BoxLogin } from '../assets/js/styled';
import robot from '../assets/images/robot_logo.png';
import PageButton from '../components/PageButton'
import Input from '../components/Input';




class Login extends Component {
    render() {
        return (
            <div>
                <LogoImg>
                    <img src={robot} alt={robot} style={{ maxWidth: "100%" }} />
                </LogoImg>
                <BoxLogin className="mt-3">        
                    <Input type="email" text="emailInput" string="Email"/>
                    <Input type="password" text="passInput" string="Mot de passe" />
                    <div className="row mt-3">
                        <div className="col">
                            <PageButton wth="10rem" hth="2rem" text="Connexion" />
                        </div>
                        <div className="col">
                            <PageButton wth="10rem" hth="2rem" text="Inscription"/>
                        </div>
                    </div>
                </BoxLogin>         
            </div>
        );
    }
}



export default Login;