import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import {Movie, MovieInformations, GoBackLink, ArrowIcon} from "./Pages.styled"

const MovieDetails = () => {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const params = useParams('');
  const movieId = params.movieId;

  const location = useLocation();
  const backPath = location.state?.from ?? '/';

  const manageMovieDetails = movie => {
    const year = new Date(movie.release_date).getFullYear();
    const score = Math.floor(movie.vote_average * 10);
    const genresNames = movie.genres.map(genre => genre.name);
    const imagePath = movie.poster_path || movie.backdrop_path;
    setTitle(movie.title);
    setYear(year);
    setScore(score);
    setOverview(movie.overview);
    setGenres(genresNames);
    setIsLoading(true);
    setImage(imagePath);
  };

  useEffect(() => {
    const apiKey = '0003f54f58f173442abd026bac610d83';
    const movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(movieDetailsURL);
        const movieDetails = await response.json();
        manageMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <GoBackLink to={backPath}>
              <ArrowIcon viewBox="0 0 24 24">
        <path d="M14 7l-5 5 5 5V7z" /> </ArrowIcon>
        Go back</GoBackLink>
      <Movie>
        {image !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt={title}
            width={300}
          />
        ) : (
          <p></p>
        )}
        <div>
          {isNaN(year) ? (
            <h2>{title}</h2>
          ) : (
            <h2>
              {title} ({year})
            </h2>
          )}
          <p>User score: {score}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.join(', ')}</p>
        </div>
      </Movie>
      <MovieInformations>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: backPath }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: backPath }}>
              Reviews
            </Link>
          </li>
        </ul>
      </MovieInformations>
      <Outlet />
    </>
  );
};

export default MovieDetails;
