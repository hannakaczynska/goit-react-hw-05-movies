import MoviesList from '../components/MoviesList';
import React, { useEffect, useState } from 'react';
import {Title} from './Pages.styled'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState('');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;

    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(trendingURL);
        const trendingMovies = await response.json();
        setTrendingMovies(trendingMovies.results);
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {trendingMovies !== '' ? <MoviesList movies={trendingMovies} /> : ''}
      </ul>
    </>
  );
};

export default Home;
