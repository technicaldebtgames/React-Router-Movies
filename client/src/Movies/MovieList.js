import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;

  // I was going to use useHistory for a more dynamic url, but it was giving me errors.
  // I am not sure but I think it may have been related to some issue I was having with
  // ports being used between the server and the client. (Server says it is listening
  // on port 5000, but client is opening on localhost:3000 for some reason. The app
  // works fine without this, which confuses me, BUT it is working, only without useHistory.)
  return (
    <Link to={`movies/${id}`}><MovieCard m={movie}></MovieCard></Link>
  );
}

export default MovieList;
