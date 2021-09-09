import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {

  return (
    <>
      <Search />

      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title="Originales">
          <Carousel>
            {originals.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
