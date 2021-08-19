import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies');
      const data = await response.json();
      return setVideos(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
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

      <Footer />

    </div>
  );
};

export default App;
