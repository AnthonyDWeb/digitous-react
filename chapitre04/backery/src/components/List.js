//------------------------Library------------------------------------
import React from 'react'


class List extends React.Component{
    render(){
        return (
        <ul>
            <li>{this.props.name} {this.props.price}€</li>
        </ul>
        )
    }
}


export default List;