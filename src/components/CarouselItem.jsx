import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import removeIcon from '../assets/images/delete-icon.png';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, isInMyList } = props;
  const details = `${year} ${contentRating} ${duration} minutes`;

  const handleSetFavorite = () => {
    const existsFavorite = props.mylist.find((item) => item.id === id);

    if (existsFavorite) {
      alert(`Ya tienes agregado ${title} a la lista de favoritos`);
    } else {
      props.setFavorite({
        id, title, year, contentRating, duration, cover,
      });
    }
  };

  const handleDeleteFavorite = (id) => {
    props.deleteFavorite(id);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          {isInMyList ?
            <img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" onClick={() => handleDeleteFavorite(id)} /> :
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} />}
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

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
