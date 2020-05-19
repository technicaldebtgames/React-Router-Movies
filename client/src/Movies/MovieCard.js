import React from 'react';

const MovieCard = props => {
  return (
    <div className="movie-card">
    <h2>{props.m.title}</h2>
    <div className="movie-director">
      Director: <em>{props.m.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{props.m.metascore}</strong>
    </div>
    <h3>Actors</h3>

    {props.m.stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
  </div>
  );
};

export default MovieCard;
