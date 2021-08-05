import React from 'react'
import moment from 'moment'
import Cards from '../components/Cards';


let today = moment().format('YYYY-MM-DD')
let lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');

class Weekly extends React.Component{
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
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}/>}&api_key=ffe8fb6083dd9df3c48769e65f74d600`)
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
                <h1 className="mainTitle">Weekly</h1>
                {this.state.movies.map((myMovie, index) => <Cards key={index} movieImg={myMovie.poster_path} title={myMovie.title} date={myMovie.release_date} description={myMovie.overview} /> )}
            </div>)
    }
}

export default Weekly;