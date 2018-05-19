import React, { Component } from 'react'
import {Carre} from '../assets/js/styled';
import { Droppable } from 'react-drag-and-drop'
import {ProfileImgBis} from '../assets/js/styled';


class DualPic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: ''
         };
    }
    render() {
                <div>
                    <Droppable>
                        types={['image']} 
                        onDrop={this.onDrop.bind(this)}
                        <div className="row justify-content-center">

                            <Carre className="col-4" />
                            <div className="col-4">
                                <ProfileImgBis type="image" image={this.props.image}></ProfileImgBis>
                            </div>

                        </div>
                    </Droppable>
                </div>          

        
        return (
                <div>
                    <div className="row justify-content-center">

                        <div className="col-4">
                            <ProfileImgBis type="image" image={this.props.image}></ProfileImgBis>
                        </div>
                    </div>
                </div>
            
        );
    }
    onDrop(image) {
        console.log(image)
        // => banana 
    }
}

export default DualPic;
