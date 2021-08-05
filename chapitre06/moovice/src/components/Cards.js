import React from 'react'


class Cards extends React.Component{

    stockId = (id) => {
        localStorage.setItem("favorite",JSON.stringify(id))
}

    render(){
        return (
        <div className="subcontainer">
                <img onClick={ () => this.stockId(this.props.favorite)} src={`https://image.tmdb.org/t/p/w300/${this.props.movieImg}`} alt={`Affiche du film: ${this.props.title}`}/>
                <div className="subcontainer-information">
                    <h4>{this.props.title}</h4>
                    <p><span>Release :</span>{this.props.date}</p>
                    <p><span>Description :</span>{this.props.description}</p>
                </div>
        </div>) 
    }
}

export default Cards;