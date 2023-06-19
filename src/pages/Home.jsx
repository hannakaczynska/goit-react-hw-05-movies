import MoviesList from '../components/MoviesList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState('');

  useEffect(() => {
    const API_KEY = '0003f54f58f173442abd026bac610d83';
    const trendingURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`;

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
      <p>Trending today</p>
      <ul>
        {trendingMovies !== '' ? <MoviesList movies={trendingMovies} /> : <li></li>}
      </ul>
    </>
  );
};

export default Home;
