import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import movies from '../movies.json'


class Homepage extends React.Component{
  render(){
    return (
        <div>
            <h1>Home</h1>
            {movies.map(movie => 
              <div className="container">
                <p>Title: <Link to={`/${movie.id}`}>{movie.title}</Link></p>
              </div>
            )}
        </div>)
  }
}

export default Homepage;
