import React, { useState } from 'react';
import {Route} from "react-router-dom"
import Movie from "./Movies/Movie"
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Navigation from "./Navigation"

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Navigation />
      <SavedList list={savedList} />
      <Route path="/movielist" component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
