import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { InputLogin } from '../assets/js/styled'




class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="col-10">
                <FontAwesomeIcon icon={this.props.icon} /><InputLogin type={this.props.type} class="form-control" id={this.props.text} placeholder={this.props.string} />
            </div>
        );
    }
}

export default Input;