import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const movieReviewsURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${apiKey}`;
    const fetchMovieReviews = async () => {
      try {
        const response = await fetch(movieReviewsURL);
        const movieReviews = await response.json();
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);


  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h3>Autor: {review.author}</h3>
              <p>{ review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
