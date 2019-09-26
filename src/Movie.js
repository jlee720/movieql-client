import React from 'react';
import './Movie.css'

function Movie({ title, rating, runtime, genres, summary, poster }) {
  return (
    <div className="movie_wrapper">
      <div className="movie">
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <p className="movie_rating">{rating}</p>
          <p className="movie_runtime">{runtime} min</p>
          <p className="movie_genre">{genres[0]}</p>
          <p className="movie_summary">{summary}</p>
        </div>
        <div className="movie_image">
          <img src={poster} alt={title} title={title} />
        </div>
      </div>
    </div>
  )
}

export default Movie;