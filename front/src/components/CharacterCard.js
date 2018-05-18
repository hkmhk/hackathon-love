import React, { Component } from 'react';
import {ProfileImg} from '../assets/js/styled';
import HeadingProfil from './HeadingProfil';
import PageButton from './PageButton';



class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        const {character} = this.props;
        const affinities = this.props.character.affiliations.map((el, i) => 
         <PageButton text={el} key={i} marg="4px"/>);

        return (
            <div className="container">
                <div className="row">
                    <ProfileImg image={character.image}>
                    </ProfileImg>
                </div>
                <div className="row mr-2 ml-2">
                    <HeadingProfil character={character}/>
                </div>
                <div className="row mt-2 justify-content-center">
                    {affinities}
                </div>
            </div>
        );
    }
}

export default CharacterCard;