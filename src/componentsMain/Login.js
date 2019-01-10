import React, { Component } from 'react';
import { BoxLogin, LogoImg } from '../assets/js/styled';
import robot from '../assets/images/robot_logo.png';
import PageButton from '../components/PageButton';
import Input from '../components/Input';
import { checkUser, logUser, signNewUser } from '../assets/js/authFirebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createUser = this.createUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  async componentDidMount() {
    const user = await checkUser();
    if (user) {
      this.props.history.push('/home');
    }
  }

  async logIn(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passInput').value;
    logUser(email, password);
    const user = await checkUser();
    if (user) {
      this.props.history.push('/home');
    }
  }

  async createUser(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passInput').value;
    signNewUser(email, password);
    const user = await checkUser();
    if (user) {
      this.props.history.push('/inscription');
    }
  }

  render() {
    return (
      <div>
        <LogoImg>
          <img src={robot} alt={robot} style={{ maxWidth: '100%' }} />
        </LogoImg>

        <BoxLogin className="mt-3">
          <form>
            <Input type="email" text="emailInput" string="Email" />
            <Input type="password" text="passInput" string="Mot de passe" />
          </form>

          <div className="row mt-3">
            <div className="col">
              <PageButton func={this.logIn} wth="10rem" hth="2rem" text="Connexion" />
            </div>
            <div className="col">
              <PageButton func={this.createUser} wth="10rem" hth="2rem" text="Inscription" />
            </div>
          </div>
        </BoxLogin>
      </div>
    );
  }
}

export default Login;
