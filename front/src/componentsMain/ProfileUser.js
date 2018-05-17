import React, { Component } from 'react';
import HeadingProfil from '../components/HeadingProfil';

class ProfileUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="row">
                <HeadingProfil />
            </div>
        );
    }
}


export default ProfileUser;