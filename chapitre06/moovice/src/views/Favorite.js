import React from 'react'

class Favorite extends React.Component{
    
    getStorage = () => localStorage.getItem('Favorite');
    

    constructor(){
        super();

            this.state ={
                movies: [],
                favIDs: this.getStorage()
            }
    }

    componentDidMount(){
        console.log('fav ->' ,this.state.favIDs);
        this.state.favIDs.forEach(id => this.getMovie(id));
    }

    getMovie = (id) => {
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=ffe8fb6083dd9df3c48769e65f74d600`)
        .then(response => response.json())
        .then(myResult => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    movies: myResult
                }
            })
        })
    }

    render(){
        return <div>
            <h1 className="mainTitle">Favorite</h1>
            {this.state.movies}
            </div>
    }
}

export default Favorite;