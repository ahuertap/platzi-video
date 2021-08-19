import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = (props) => {
  const { title, year, contentRating, duration, cover } = props;
  const details = `${year} ${contentRating} ${duration} minutes`;

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{details}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CarouselItem;
