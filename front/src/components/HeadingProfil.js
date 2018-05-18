import React, { Component } from 'react';
import { NameCharacter, Pourcentage, Paragraphes } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class HeadingProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="col">
                <div className="row mt-2">
                    <div className="col-3 offset-3">
                        <div className="row justify-content-center">
                            <FontAwesomeIcon icon="thumbs-down" size="2x" style={{ color: "white" }} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row justify-content-center">
                            <FontAwesomeIcon icon="thumbs-up" size="2x" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-8">
                        <div className="row justify-content-start">
                            <NameCharacter>{this.props.character.name}</NameCharacter>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row justify-content-end">
                            <FontAwesomeIcon icon="heart" size="3x" style={{ color: "white" }} />
                        </div>
                        <div className="row justify-content-end">
                            <Pourcentage>100%</Pourcentage>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <Paragraphes>Affinités</Paragraphes>
                </div>
            </div>
        );
    }
}

export default HeadingProfil;