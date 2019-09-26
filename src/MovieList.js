import React  from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Movie  from './Movie'

const GET_MOVIES = gql `
    query {
      movies(limit: 50, rating: 8.5) {
        id
        title_long
        rating
        runtime
        genres
        summary
        medium_cover_image
      }
    }
  `

function MovieList() {
  const { loading, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading ...</p>;

  let component = data.movies.map((movie) => 
      <Movie key={movie.id}
        id={movie.id} 
        title={movie.title_long}
        rating={movie.rating}
        runtime={movie.runtime}
        genres={movie.genres}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />
    );
  return  (
    <section className="movie_list">
      {component}
    </section>
  )
}

export default MovieList