import React, { Component } from 'react';
import { MainContainer, NameCharacter } from '../assets/js/styled';

class HeadingProfil extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }
    render() {
        return (
            <div className="row">
                <h2>{this.props.character.name}</h2>
            </div>
        );
    }
}

export default HeadingProfil;