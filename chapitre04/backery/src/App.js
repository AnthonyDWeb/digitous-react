import React from 'react';
import './App.css';
import Button from './components/Button';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

class App extends React.Component{

    constructor(){
        super();

        this.state ={
            activeTab: "",
            items: []
        }
    }

    renderActiveTab(){
        if (this.state.activeTab === "Add") {
            return <Add />
        } else if (this.state.activeTab === "List") {
            return <List />
        } else {
            return <Pay />
        }
    }

    render(){
        return (
                <div>
                        <div className="div-btn">
                                <Button isSelected={this.state.activeTab === "Add" ? true : false}  > Add </Button>
                                <Button isSelected={this.state.activeTab === "List" ? true : false} > List </Button>
                                <Button isSelected={this.state.activeTab === "Pay" ? true : false} > Pay </Button>
                        </div>

                        {this.renderActiveTab()}
                </div>
        )
    }
}


export default App;
