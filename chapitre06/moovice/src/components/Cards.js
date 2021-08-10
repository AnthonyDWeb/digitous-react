import React from 'react'


class Cards extends React.Component{



    render(){
        console.log('props -> ', this.props)
        return (
        <div className="subcontainer">
                <img onClick={ () => this.props.nextMovie ? this.props.nextMovie(this.props.favorite) : null } className="img-movie" src={`https://image.tmdb.org/t/p/w300/${this.props.movieImg}`} alt={`Affiche du film: ${this.props.title}`}/>
                <div className="subcontainer-information">
                    <h4>{this.props.title}</h4>
                    <p><span>Release :</span>{this.props.date}</p>
                </div>
                <div  className="subcontainer2-information">
                    <p><span>Description :</span>{this.props.description}</p>
                </div>
        </div>) 
    }
}

export default Cards;