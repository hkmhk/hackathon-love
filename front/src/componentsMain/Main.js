import React, { Component } from 'react';
import SliderCard from '../components/SliderCard';
import { getRandomInt } from '../assets/js/lib';
import { getData } from '../assets/js/axios';
import PageFilter from '../components/PageFilter';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }


    componentWillMount() {
        getData("https://akabab.github.io/starwars-api/api/all.json").then(res => {
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
                <PageFilter />

                <SliderCard characters={this.state.characters} />
            </div>
        );
    }
}

export default Main;