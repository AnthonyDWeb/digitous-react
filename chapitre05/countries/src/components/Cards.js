import React from 'react';


class Cards extends React.Component{

    render(){
        return ( 
            <div>
                <img className="flag-img" src={this.props.flag} />
                <div className="card-info">{this.props.name} - {this.props.capital} - {this.props.region}</div>
            </div>
        )
    }
}


export default Cards;
