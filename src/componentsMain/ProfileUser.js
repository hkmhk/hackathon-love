import React, { Component } from 'react';

import { UserPicture } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Input from '../components/Input';
import BarreMenu from '../components/BarreMenu';
import { checkUser } from '../assets/js/authFirebase';

class ProfileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

  }

  async componentDidMount() {
    const user = await checkUser();
    if (user) {
      this.setState({ user });
    }
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <BarreMenu {...this.props} />
        <div className="container">
          <div className="d-flex w-100 justify-content-center">
            <UserPicture></UserPicture>
          </div>
          <div className="d-flex w-100 justify-content-center mt-4">
            <div className="d-flex d-inline-block">
              <FontAwesomeIcon icon="user" size="2x" style={{ color: 'white', marginRight: '10px' }} />
              <Input type="text" text="nameInput" string="Fukoyamashisu" />
            </div>
          </div>
          <div className="d-flex w-100 justify-content-center mt-4">
            <div className="d-flex d-inline-block">
              <FontAwesomeIcon icon="globe" size="2x" style={{ color: 'white', marginRight: '10px' }} />
              <Input type="text" text="galaxieInput" string="Tattoin" />
            </div>
          </div>
          <div className="d-flex w-100 justify-content-center mt-4">
            <div className="d-flex d-inline-block">
              <FontAwesomeIcon icon="user" size="2x" style={{ color: 'white', marginRight: '10px' }} />
              <Input type="text" text="ageInput" string="250 ans" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileUser;
