//------------------------Library------------------------------------
import React from 'react'
import {v4 as uuid} from 'uuid'
//------------------------Components------------------------------------
import Card from './Card';



class Pay extends React.Component{
    constructor(){
        super();

        this.state ={
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }

    

    handleSelect = (name, price) => {
        const newTotal = this.state.total + price;
        const newTotalTVA = newTotal*0.2;
        const newTotalEcoTax = 0.03*(this.state.basket.length +1);
        const newTotalTTC = newTotal + newTotalEcoTax+ newTotalTVA;
 
        this.setState( prevState => {
            return {
                ...prevState,
                basket: [...prevState.basket, {
                    name: name,
                    price: price
                }],
                total: newTotal, 
                totalTVA: newTotalTVA,
                totalEcoTax: newTotalEcoTax,
                totalTTC: newTotalTTC
            }
        })
        
        console.log(`name: ${name}, price: ${price}`)
    }

    render(){
        return (
            <div>
                <p>Total = {this.state.total}</p>
                <p>totalTVA = {this.state.totalTVA}</p>
                <p>totalEcoTax = {this.state.totalEcoTax}</p>
                <p>totalTTC = {this.state.totalTTC}</p>
                {this.props.items.map( item => <Card key={uuid()} productName={item.name} price={item.price} onClick={this.handleSelect} />)}
            </div>
        )
    }
}


export default Pay;