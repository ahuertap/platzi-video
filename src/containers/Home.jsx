import React from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useFetchVideos from '../hooks/useFetchVideos';

import '../assets/styles/App.scss';

const url = 'http://localhost:3000/movies';

const Home = () => {
  const videos = useFetchVideos(url);

  return videos.length === 0 ? <h1>Loading...</h1> : (
    <>
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {videos.mylist.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}

      {videos.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {videos.trends.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}

      {videos.originals.length > 0 && (
        <Categories title="Originales">
          <Carousel>
            {videos.originals.map((item) => {
              return <CarouselItem key={item.id} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} cover={item.cover} />;
            })}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

export default Home;
