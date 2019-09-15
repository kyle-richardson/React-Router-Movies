import React from 'react';

const MovieCard = props => {
  const current = props.movie
  return ( 
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{current.title}</h2>
        <div className="movie-director">
          Director: <em>{current.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{current.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {current.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
