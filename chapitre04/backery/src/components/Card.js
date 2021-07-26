//------------------------Library------------------------------------
import React from 'react';
//------------------------style------------------------------------
import '../App.css'

class Card extends React.Component{
    constructor(){
        super();

        this.state ={
            image: "./images/item.png"
        }
    }

    render(){
        return (
            <div>
                <button onClick={ () => this.props.onClick(this.props.productName, this.props.price)} ><img className="imgCard" src={this.state.image} alt="item" /></button>
            </div>
        )
    }
}

export default Card;