import React from 'react'
import Cards from '../components/Cards';


class Favorite extends React.Component{
    
    getStorage = () => JSON.parse(localStorage.getItem('Favorite'));
    

    constructor(){
        super();

            this.state ={
                movies: [],
                favIDs: this.getStorage()
            }
    }

    componentDidMount(){
        console.log('fav ->' ,this.state.favIDs);
        this.favMovies()
    }

    favMovies = () =>{
        return ( this.state.favIDs === null ? null : this.state.favIDs.forEach(this.state.favIDs === null ? null : id => this.getMovie(id) ) )
    }

    getMovie = (id) => {
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=ffe8fb6083dd9df3c48769e65f74d600`)
        .then(response => response.json())
        .then(myResult => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    movies:  [...prevState.movies, {...myResult}] 
                }
            })
        })
    }

    render(){
        console.log("movies ->", this.state.movies)
        return <div>
            <h1 className="mainTitle">Favorite</h1>
            <div className="mainContainer-information">
                {this.state.favIDs === null ? null :
                this.state.movies.map((myMovie, index) => <Cards key={index} movieImg={myMovie.poster_path} title={myMovie.title} date={myMovie.release_date} description={myMovie.overview} /> )}
            </div>
        </div>
    }
}

export default Favorite;