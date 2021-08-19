import { useState, useEffect } from 'react';

const useFetchVideos = (url) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return setVideos(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return videos;
};

export default useFetchVideos;
