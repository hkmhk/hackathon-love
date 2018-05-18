import React, { Component } from "react";
import {ProfileImgBis} from '../assets/js/styled';


class MosaicPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    render() {

        const characters = this.props.characters.map((el,i) => {
            return  <div key={i} className="col-2">
                            <ProfileImgBis image={el.image}></ProfileImgBis>
                    </div>
        })

        return (
                <div className="row no-gutters">
                    {characters}
                </div>
            
        );
    }
}

export default MosaicPic;