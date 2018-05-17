import React, { Component } from 'react';
import {LogoImg , Icon} from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { getData } from '../assets/js/axios';
import robot from '../assets/images/robot_logo.png';


import { getRandomInt } from '../assets/js/lib';

        


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }


    componentWillMount() {
        getData("https://akabab.github.io/starwars-api/api/all.json").then(res => {
            const characters = res.map(el => {
                el.age = getRandomInt(20, 50);
                return el;
            })
            this.setState({ characters })
        });
    }


    render() {
        return (
            <div>
              <LogoImg>
                  <img src={robot} alt={robot} style={{maxWidth:"100%"}}/>
              </LogoImg>
              <Icon>
                  <FontAwesomeIcon icon={['far', 'heart']} style={{color:"white"}} size="3x"/>
              </Icon>
            </div>
        );
    }
}


export default Home;