import React from 'react';
import '../App.css';
import movies from '../movies.json'


class Homepage extends React.Component{
  render(){
    return <div>
        {/* {movies.map(movie => <p> Title: {movie.title}</p>)} */}
        {movies.map(movie => <div>
                    <img src={movie.image} alt="image" />
                    <p>Title: {movie.title} </p>
                </div>)}
    </div>
  }
}

export default Homepage;
