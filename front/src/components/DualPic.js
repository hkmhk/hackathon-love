import React, { Component } from 'react'
import {Carre} from '../assets/js/styled';

class DualPic extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <div className="row justify-content-center">

            <Carre className="col-4" />

        </div>
            
        );
    }
}

export default DualPic;
