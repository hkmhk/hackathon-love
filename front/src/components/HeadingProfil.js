import React, { Component } from 'react';
import { MainContainer, NameCharacter, Pourcentage, Paragraphes } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class HeadingProfil extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <FontAwesomeIcon icon="thumbs-up" size="2x" style={{ color: "white" }} />
                    <FontAwesomeIcon icon="thumbs-down" size="2x" style={{ color: "white" }} />
                </div>

                <div className="row">
                    <div className="col">
                        <NameCharacter>Luke Skywalker</NameCharacter>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon icon="heart" size="3x" style={{ color: "white" }} />
                        <Pourcentage>100%</Pourcentage>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Paragraphes>sdjkfhdlhjfakld</Paragraphes>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadingProfil;