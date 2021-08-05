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

    componentDidUpdate(){
        console.log('test 0', this.state.movies[this.state.currentBattle]);
        console.log('test 2', this.state.movies[this.state.currentBattle +1].id);
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

    getNextMovies = () => {
        this.setState({currentBattle: this.state.currentBattle +2})
    }

    getPreviousMovies = () => {
        this.setState({currentBattle: this.state.currentBattle -2})
    }


    render(){
        return (<div className="mainContainer">
                    <h1 className="mainTitle">Popular Battle</h1>
                    <div className="mainContainer-information">
                        <button onClick={this.getPreviousMovies} className="btn-previous"> previous </button>
                        <div className="movies-information">
                            {this.state.movies.slice(this.state.currentBattle,this.state.currentBattle +2).map((myMovie, index) => <div> 
                                <Cards key={index} favorite={myMovie.id} movieImg={myMovie.poster_path} title={myMovie.title} date={myMovie.release_date} description={myMovie.overview} />
                                <p className="separator">
                                    _____________________________________________________________________________________________________________
                                </p> 
                            </div> )}
                        </div>
                        <button onClick={this.getNextMovies} className="btn-next">Next</button>
                    </div>
            </div>)
    }
}

export default PopularBattle;