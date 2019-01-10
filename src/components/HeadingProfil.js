import React, { Component } from 'react';
import { InformationsTitle, NameCharacter, Pourcentage } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class HeadingProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.plus = this.plus.bind(this);
    this.moins = this.moins.bind(this);
  }

  plus() {
    this.setState({ number: this.state.number + 1 });
  }

  moins() {
    this.setState({ number: this.state.number === 0 ? 0 : this.state.number - 1 });
  }

  render() {
    return (
      <div className="col">
        <div className="row mt-2">
          <div className="col-3 offset-2">
            <div className="row justify-content-center " onClick={this.moins}>
              <FontAwesomeIcon icon="thumbs-down" size="2x" style={{ color: 'white' }} />
            </div>
          </div>
          <div className="col-2">
            <div className="row justify-content-center">
              <p style={{ fontSize: '18px', fontFamily: 'Roboto', color: 'white', fontWeight: 'bold' }}>{this.state.number === 0 ? '' : this.state.number}</p>
            </div>
          </div>
          <div className="col-3">
            <div className="row justify-content-center" onClick={this.plus}>
              <FontAwesomeIcon icon="thumbs-up" size="2x" style={{ color: 'white' }} />
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
              <FontAwesomeIcon icon="heart" size="3x" style={{ color: 'white' }} />
            </div>
            <div className="row justify-content-end">
              <Pourcentage>100%</Pourcentage>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <InformationsTitle>Affinités</InformationsTitle>
        </div>
      </div>
    );
  }
}

export default HeadingProfil;
