import React from 'react';
import {NavLink, Link} from "react-router-dom"

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <div className="saved-container">
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`} activeClassName="activeSavedButton">
          <div className="saved-container">
            <span 
              key={movie.id} 
              className="saved-movie"
              >
                {movie.title}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
    <div className="button-container">
      <Link to="/">
        <div className="home-button">
          Home
        </div>
      </Link>
      <div 
        className="clear-button" 
        onClick={()=> {
          props.setSavedList([])
        }}>
          Clear
      </div>
    </div>
  </div>
);

export default SavedList;
