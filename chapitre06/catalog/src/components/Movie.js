import React from 'react';
import '../App.css';
import movies from '../movies.json'


class Movie extends React.Component{

    render(){
        let movieData = movies.filter(movie => movie.id === parseInt(this.props.match.params.id))
        console.log('movie' , movieData)
        let myMovie = movieData.map(myMovie => <div >
                <img src={myMovie.image} alt="image" />
                <p>Title: {myMovie.title} </p>
                <p>Director: {myMovie.director} </p>
                <p>Actors: {myMovie.stars.map(star => <li>{star}</li>)}</p>
                <p>Description: {myMovie.description} </p>
        </div>)

        return <div>
            {myMovie }
        </div>
    }
}

export default Movie;
