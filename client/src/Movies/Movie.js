import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard"

const Movie = (props) => {
  const [movie, setMovie] = useState(undefined);
  // const id = props.match.params.id

  useEffect(() => {
   
    const id = props.match.params.id;
    console.log(id)
    axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          const tempMovie = response.data
          setMovie(tempMovie);
          // console.log(tempMovie)
          // props.addToSavedList(tempMovie);
        })
        .catch(error => {
          console.error(error);
        });
  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

    if(!movie)  return <div></div> 
    return <MovieCard movie={movie} /> 
}

export default Movie;
