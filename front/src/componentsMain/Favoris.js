import React, { Component } from 'react';
import SliderCard from '../components/SliderCard';
import { getRandomInt } from '../assets/js/lib';
import { getData } from '../assets/js/axios';


class Favoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }


    componentWillMount() {
        getData("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json").then(res => {
            const characters = res.map(el => {
                el.age = getRandomInt(20, 50);
                return el;
            })
            this.setState({ characters })
        });
    }

    render() {

        return (
            <div>
                <SliderCard characters={this.state.characters} />
            </div>
        );
    }
}



export default Favoris;