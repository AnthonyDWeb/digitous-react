import React from 'react'
import Cards from '../components/Cards';


class Popular extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: []
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
        return (
            <div className="mainContainer">
                <h1 className="mainTitle">Popular</h1>
                {this.state.movies.map((myMovie, index) => <Cards key={index} movieImg={myMovie.poster_path} title={myMovie.title} date={myMovie.release_date} description={myMovie.overview} /> )}
            </div>)
    }
}

export default Popular;