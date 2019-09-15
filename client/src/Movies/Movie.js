import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard"

const Movie = props => {
  const [movie, setMovie] = useState(undefined);
  const id = props.props.match.params.id;

  useEffect(() => { 
    setMovie(props.movies.find(movie=> `${movie.id}`===id))

  },[props.movies, id]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

    if(!movie)  return<div></div> 
    
    return <MovieCard movie={movie} saveMovie={saveMovie}/> 
}

export default Movie;
