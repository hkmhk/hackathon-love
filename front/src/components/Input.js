import React, { Component } from 'react';
import { InputStyle } from '../assets/js/styled'
import { IconStyle } from '../assets/js/styled'



class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
                <form>
                    <div class="form-group">
                        <IconStyle icon={this.props.class} /><InputStyle type={this.props.type} class="form-control" id="" placeholder={this.props.placeholder} />
                    </div>
                </form>
        );
    }
}

export default Input;