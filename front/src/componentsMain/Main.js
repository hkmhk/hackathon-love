import React, { Component } from 'react';
import SliderCard from '../components/SliderCard';
import { getRandomInt} from '../assets/js/lib';
import { getData } from '../assets/js/axios';
import { checkUser } from '../assets/js/authFirebase';
import Firebase from '../auth';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            user:{}
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

    componentDidMount(){
        const user = checkUser();
        if (user) {
            Firebase.database().ref(`${user.uid}/`).once('value').then(snap => this.setState({ user: snap.val() }));
        } else {
            this.props.history.push("/login");
        }
        
    }

    

    render() {
        
        

        return (
            <div>
                <SliderCard characters={this.state.characters}/>
            </div>
        );
    }
}

export default Main;