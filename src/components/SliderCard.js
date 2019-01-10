import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CharacterCard from './CharacterCard';

class SliderCard extends Component {

  render() {
    const settings = {
      dots: false,
      arrows: false,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
    };

    const characters = this.props.characters.map((el, i) => {
      return <div key={i ** 3}>
        <div className="d-flex" style={{ height: '100vh' }}>
          <CharacterCard character={el} />
        </div>
      </div>;
    });

    return (
      <Slider {...settings}>
        {characters}
      </Slider>
    );
  }
}

export default SliderCard;
