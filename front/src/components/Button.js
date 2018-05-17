import React, {Component} from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <button style={this.props.character.gender === "male" ? this.props.style1 : this.props.style2}>{this.props.character.name}</button>
        );
    }
}

export default Button;
