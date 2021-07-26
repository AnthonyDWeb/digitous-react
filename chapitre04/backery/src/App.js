//------------------------Library------------------------------------
import React from 'react';
import {v4 as uuid} from 'uuid'
//------------------------Components------------------------------------
import Button from './components/Button';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
//------------------------Style------------------------------------
import './App.css';
//------------------------------------------------------------------------


class App extends React.Component{

    constructor(){
        super();

        this.state ={
            activeTab: "",
            items: [],
            productName: "",
            price: 1,
            total: 0
        }
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(this.state.items);
    }

    isSelected = (e) =>{
        // if (e.target.name === "Add")
        this.setState(prevState => {
            return {
                ...prevState,
                activeTab: e.target.name
            }
        })
          
    }

  updateProductName = (e) => {
        this.setState( prevState => {
            return {
                ...prevState,
                productName: e.target.value
            }
        })
    }

    updatePrice = (e) => {
        this.setState( prevState => {
            return {
                ...prevState,
                price: parseInt(e.target.value)
            }
        })
    }


    addItem = () => {
        this.setState(prevState => {
            return { 
                ...prevState,
                items:[...prevState.items, {
                    name: prevState.productName,
                    price: prevState.price
                }].sort((a,b)=> b.price - a.price ),
                total: prevState.total + prevState.price
            }
        })
    }
    
//------------------------------------------------------------------------

    renderActiveTab(){
        if (this.state.activeTab === "Pay") {
            return <Pay items={this.state.items}/>
        } else if (this.state.activeTab === "List") {
            return this.state.items.map((item)=> (<List key={uuid()} name={item.name} price={item.price} />))
        } else {
            return <Add />
        }
    }


    render(){
        return (
            <div className="main-div">
                        <h1 className="main-title">Backery</h1>
                        <div className="div-btn">
                                <Button onClick={this.isSelected} >Add</Button>
                                <Button onClick={this.isSelected} >List</Button>
                                <Button onClick={this.isSelected} >Pay</Button>
                        </div>
                        <div><input className="inputApp" type="text" onChange={this.updateProductName} placeholder="Enter something.." /></div>
                        <p>{this.state.price}€ </p>
                        <div><input className="inputApp" type="range" onChange={this.updatePrice} min="1" max="10" value={this.state.price}/></div>
                        <div><button className="btn-add" onClick={this.addItem} >Add</button></div>
                        <div className="container">{this.renderActiveTab()}</div>
            </div>
        )
    }

    
}


export default App;
