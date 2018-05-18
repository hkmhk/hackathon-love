import React, { Component } from 'react';

import { InputLogin } from '../assets/js/styled'




class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <InputLogin type={this.props.type} class="form-control" id={this.props.text} placeholder={this.props.string} />
        );
    }
}

export default Input;