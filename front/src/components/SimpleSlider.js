import React,{Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Firebase from '../auth';


import { UserPicture } from '../assets/js/styled';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { affiniteTag,ageTag,genderTag, getRandomInt} from "../assets/js/lib";
import { checkUser } from '../assets/js/authFirebase';


import PageButton from '../components/PageButton';
import Input from '../components/Input'; 


class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser(e){
        const bt = document.querySelectorAll("button");
        const arr = [];
        bt.forEach(el => el.value !=="" ? arr.push(el) : "");
        const myObject = arr.reduce((acc, el, i) => { acc[i] = el.innerHTML + acc[i] || el.innerHTML;return acc},{});
        const user = checkUser();
        if (user) {
            Firebase.database().ref(`${user.uid}/`).set({
                affiliations:myObject,
                email: user.email
            });
            this.props.history.push("/home");
        }
    }
    


    render() {
        const settings = {
            dots: true,
            arrows:false,
            swipe:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst:true
        };
        
        const randomNumber = getRandomInt(1,120);
        const randomAffiTags = affiniteTag.slice(randomNumber,randomNumber+14);
        const affiTags = randomAffiTags.map((el, i) => <PageButton text={`# ${el}`} key={i} marg="4px"/>);
        const ageTags = ageTag.map((el, i) => <PageButton text={`# entre ${el[0]} et ${el[1]} `} key={i} marg="4px" /> );
        const genderTags = genderTag.map((el, i) => <PageButton text={`# ${el}`} key={i} marg="4px" />);


        return (
            <Slider {...settings}>
                <div>
                    <div className="d-flex align-items-center" style={{height:"100vh"}}>  
                        <div className="container">
                            <div className="d-flex w-100 justify-content-center">
                                <UserPicture></UserPicture>
                            </div>
                            <div className="d-flex w-100 justify-content-center mt-4">
                                <div className="d-flex d-inline-block">
                                    <FontAwesomeIcon icon="user" size="2x" style={{ color: "white",marginRight:"10px" }}/>
                                    <Input type="text" text="nameInput" string="Nom" />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-center mt-4">
                                <div className="d-flex d-inline-block">
                                    <FontAwesomeIcon icon="globe" size="2x" style={{ color: "white", marginRight: "10px"}}/>
                                    <Input type="text" text="galaxieInput" string="Galaxie" />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-center mt-4">
                                <div className="d-flex d-inline-block">
                                    <FontAwesomeIcon icon="user" size="2x" style={{ color: "white", marginRight: "10px" }} />
                                    <Input type="text" text="ageInput" string="Age" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex pt-5 pb-5 pr-2 pl-2 align-items-center" style={{ height: "100vh" }}>
                         <div className="container">
                            <div className="row  justify-content-center">
                                {affiTags}
                                {ageTags}
                                {genderTags}
                            </div>
                            <div className="row justify-content-center mt-4">
                                <PageButton wth="10rem" hth="2rem" func={this.saveUser} text="Valider" couleur="#070048" colorText="white" />
                            </div>
                         </div>
                    </div>
                </div>
            </Slider>
        );
    }
}


export default SimpleSlider;