import React, { Component } from 'react';
import {MainContainer} from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

        


class Home extends Component {

    render() {
        return (
            <MainContainer>
                <FontAwesomeIcon icon={["far","heart"]} size="4x" style={{color:"white"}}/>
            </MainContainer>
        );
    }
}


export default Home;