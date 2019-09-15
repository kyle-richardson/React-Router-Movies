import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"


const MovieList = props => {
  
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          props.setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, [props]);
  
  return (
    <div className="movie-list">
      {props.movies.map(movie => {
        const temp = movie
        return <MovieDetails key={movie.id} movie={temp}/>
      })}
      
    </div>
  );
}

const MovieDetails= props => {
  const {id, title} = props.movie
  return ( <>
    
    <Link to={`/movies/${id}`}>
      <div className="movie-header">
        <h2>{title}</h2>
      </div>
    </Link>
    
    </>
  );
}

export default MovieList;
