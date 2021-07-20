import React from 'react';
import './App.css';
import Button from './components/Button';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

class App extends React.Component{

    constructor(){
        super();

        this.State ={
            activeTab: "Add",
            items: []
        }
    }
    render(){
        return <div>
          <Button isSelected={this.State.activeTab}> Add </Button>
          <Button isSelected={this.State.activeTab}> List </Button>
          <Button isSelected={this.State.activeTab}> Pay </Button>
        </div>
    }
}


export default App;
