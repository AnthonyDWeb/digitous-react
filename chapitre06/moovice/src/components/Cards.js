import React from 'react'


class Cards extends React.Component{
    render(){
        return (
        <div className="subcontainer">
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.movieImg}`} alt={`Affiche du film: ${this.props.title}`}/>
                <div className="subcontainer-information">
                    <h4>{this.props.title}</h4>
                    <p><span>Release :</span>{this.props.date}</p>
                    <p><span>Description :</span>{this.props.description}</p>
                </div>
        </div>) 
    }
}

export default Cards;