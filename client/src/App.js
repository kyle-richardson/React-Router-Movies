import React, { useState } from 'react';
import {Route, DefaultRoute} from "react-router-dom"
import Movie from "./Movies/Movie"
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Navigation from "./Navigation"

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movies, setMovies] = useState([])

  const addToSavedList = movie => {
    if(!savedList.some(e => e.title === `${movie.title}`)) {
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <Navigation />
      <SavedList list={savedList} />
      <Route 
        exact path="/" 
        render={props=>
          <MovieList 
            props={props} 
            setMovies={setMovies} 
            movies={movies}/>}
      />
      <Route 
        path="/movies/:id" 
        render={props=>
          <Movie 
            props={props} 
            movies={movies}
            addToSavedList={addToSavedList}/>}
      />
    </div>
  );
};

export default App;
