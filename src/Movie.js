import React from 'react';

function Movie({ title, rating, runtime, genres, summary, poster }) {
  return (
    <div className="movie">
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <p className="movie_rating">{rating}</p>
        <p className="movie_runtime">{runtime}</p>
        <p>{genres}</p>
        <p>{summary}</p>
      </div>
      <img src={poster} alt={title} title={title} />
    </div>
  )
}

export default Movie;