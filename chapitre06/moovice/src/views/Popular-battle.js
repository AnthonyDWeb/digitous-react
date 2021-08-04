import React from 'react'
import Cards from '../components/Cards';


class PopularBattle extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount(){
        this.getMovies()
    }

    getMovies = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ffe8fb6083dd9df3c48769e65f74d600")
        .then(response => response.json())
        .then(myResult => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    movies: myResult.results
                }
            })
        })
    }

    render(){
        return (<div>
                    <h1>Popular Battle</h1>
                    {this.state.movies.map((myMovie, index) => <Cards key={index} movieImg={myMovie.poster_path} /> )}
            </div>)
    }
}

export default PopularBattle;