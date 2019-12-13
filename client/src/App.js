import React, { useState } from 'react';
import {Route} from "react-router-dom"
import Movie from "./Movies/Movie"
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import UpdateMovie from "./Movies/UpdateMovie"
import Navigation from "./Navigation"

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movies, setMovies] = useState([])
  const [forceUpdate, setForceUpdate] = useState(false)

  const addToSavedList = movie => {
    if(!savedList.some(e => e.title === `${movie.title}`)) {
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <Navigation />
      <SavedList list={savedList} setSavedList={setSavedList}/>
      <Route 
        exact path="/" 
        render={props=>
          <MovieList 
            props={props} 
            setMovies={setMovies} 
            movies={movies}
            forceUpdate = {forceUpdate}
            setForceUpdate={setForceUpdate}
          />}

      />
      <Route 
        path="/movies/:id" 
        render={props=>
          <Movie 
            props={props} 
            movies={movies}
            addToSavedList={addToSavedList}
          />}
      />
      <Route 
        exact path="/update-movie/:id"
        render={props=>
          <UpdateMovie
            props={props}
            movies={movies}
            setMovies={setMovies}
          />}
      />
    </div>
  );
};

export default App;
