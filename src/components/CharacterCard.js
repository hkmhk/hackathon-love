import React, { Component } from 'react';
import { InformationsTitle, Paragraphes, ProfileImg } from '../assets/js/styled';
import HeadingProfil from './HeadingProfil';
import PageButton from './PageButton';
import { strToUpperCase } from '../assets/js/lib';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { character } = this.props;
    const affinities = this.props.character.affiliations.map((el, i) =>
      <PageButton text={el} key={i} marg="4px" />);

    return (
      <div className="container">
        <div className="row">
          <ProfileImg image={character.image}>
          </ProfileImg>
        </div>
        <div className="row mr-2 ml-2">
          <HeadingProfil character={character} />
        </div>
        <div className="row mt-2 justify-content-center">
          {affinities}
        </div>
        <div className="row mr-2 ml-2">
          <InformationsTitle>Informations</InformationsTitle>
        </div>
        <div className="row mr-2 ml-2">
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Gender : </span> {character.gender}</Paragraphes>
          </div>
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Species :</span> {character.species}</Paragraphes>
          </div>
        </div>
        <div className="row mr-2 ml-2">
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Homeworld :</span> {character.homeworld}</Paragraphes>
          </div>
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Hair Color :</span> {character.hairColor}</Paragraphes>
          </div>
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Eye Color :</span> {character.eyeColor}</Paragraphes>
          </div>
          <div className="col-6">
            <Paragraphes><span style={{ fontWeight: '500' }}>Skin Color :</span> {character.skinColor}</Paragraphes>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
