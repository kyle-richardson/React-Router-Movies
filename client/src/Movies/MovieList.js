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
  }, [props.forceUpdate]);

  const deleteMovie = id => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res=> props.setForceUpdate(!props.forceUpdate))
      .catch(err=>console.log(err))
  }
  
  return (
    <div className="movie-list">
      {props.movies.map(mov => {
        return (
          <div>
            <Link to={`/movies/${mov.id}`}>
              <div className="movie-card"> 
                <h2>{mov.title}</h2>
              </div>
            </Link>
            <div onClick={()=>deleteMovie(mov.id)}>Delete</div>
          </div>
        )  
      })}
    </div>
  );
}

export default MovieList;
