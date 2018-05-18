import React, { Component } from 'react';
import { FilterPage } from '../assets/js/styled';
import PageButton from './PageButton';
import { affiniteTag, ageTag, genderTag, getRandomInt } from "../assets/js/lib";
import { TitleTags } from '../assets/js/styled'


class PageFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const randomNumber = getRandomInt(1, 120);
        const randomAffiTags = affiniteTag.slice(randomNumber, randomNumber + 15);
        const affiTags = randomAffiTags.map((el, i) => <PageButton text={`# ${el}`} key={i} couleur="#070048" colorText="white" marg="4px" />);
        const ageTags = ageTag.map((el, i) => <PageButton text={`# entre ${el[0]} et ${el[1]} `} key={i} couleur="#070048" colorText="white" marg="4px" />);
        const genderTags = genderTag.map((el, i) => <PageButton text={`# ${el}`} key={i} couleur="#070048" colorText="white" marg="4px" />);




        return (
            <FilterPage>
                <div className="container">
                    <div className="row justify-content-center">
                        <TitleTags>Affinités</TitleTags>

                    </div>
                    <div className="row justify-content-center">
                        {affiTags}
                    </div>
                    <div className="row justify-content-center">
                        <TitleTags>Age</TitleTags>
                    </div>
                    <div className="row justify-content-center">
                        {ageTags}

                    </div>
                    <div className="row justify-content-center">
                        <TitleTags>Genre</TitleTags>

                    </div>
                    <div className="row justify-content-center">
                        {genderTags}

                    </div>
                </div>

            </FilterPage>

        );
    }
}

export default PageFilter;