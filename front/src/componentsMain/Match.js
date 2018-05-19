import React, { Component } from 'react';
import MosaicPic from '../components/MosaicPic';
import { getData } from '../assets/js/axios';
// import DualPic from '../components/DualPic';


class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentWillMount() {
        getData("https://akabab.github.io/starwars-api/api/all.json").then(res => {
            const characters = res.map(el => {
                return el;
            })
            this.setState({ characters })
        });
    } 

    render() {

        return (
                <div>
                    {/* <DualPic /> */}
                    <MosaicPic characters={this.state.characters}/>
                </div>
        );
    }
}

export default Match;