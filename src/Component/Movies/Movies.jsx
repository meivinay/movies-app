import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import "./Movies.css"

// this recieves props from App.js, it is redirecting props to a single Movie Component , this is called prop drilling
// we can solve this(Props Drilling) using ContextApi or Redux

class Movies extends Component {
  render() { 
        return (
        <div className ="movies"> 
        {this.props.movie.map((movieObject) => {
          return <Movie key={movieObject.id} movie={movieObject}></Movie>;
        })}
        </div> 
        );
    }
}
 
export default Movies;