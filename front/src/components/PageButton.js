import React, { Component } from 'react';
import { ButtonPage } from '../assets/js/styled';

class PageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <ButtonPage couleur={this.props.couleur} colorText={this.props.colorText}>{this.props.text}</ButtonPage>
            </div>

        );
    }
}

export default PageButton;