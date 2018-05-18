import React, { Component } from 'react';
import { ButtonPage } from '../assets/js/styled';

class PageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
                <ButtonPage 
                marg={this.props.marg} 
                couleur={this.props.couleur} 
                colorText={this.props.colorText}
                wth={this.props.wth}
                hth={this.props.hth}
                >{this.props.text}</ButtonPage>

        );
    }
}

export default PageButton;