import React, { Component } from "react";
import {ProfileImgBis} from '../assets/js/styled';
import { Draggable} from 'react-drag-and-drop';
import DualPic from '../components/DualPic';


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
            
                            <Draggable><ProfileImgBis type="image" image={el.image}></ProfileImgBis></Draggable>
                            
                    </div>
        })

        return (
                <div>
                    <DualPic />
                    <div className="row no-gutters">
                        {characters}
                    </div>
                </div>  
                
        );
    }
}

export default MosaicPic;