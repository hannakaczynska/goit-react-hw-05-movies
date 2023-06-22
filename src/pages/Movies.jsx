import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const movieName = searchParams.get('query');

  const handleChange = e => {
    setSearchedMovie(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchedMovie !== '') {
      setSearchParams({ query: searchedMovie });
    }
  };

  useEffect(() => {
    const apiKey = '0003f54f58f173442abd026bac610d83';
    const searchMovieURL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    if (movieName === '' || movieName === null) return;

    const fetchMovie = async () => {
      try {
        const response = await fetch(searchMovieURL);
        const movies = await response.json();
        if (movies.result !== []) {
          setMovies(movies.results);
        }
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchMovie();
  }, [movieName]);

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchedMovie} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>{movies !== '' ? <MoviesList movies={movies} /> : ''}</ul>
    </>
  );
};

export default Movies;
