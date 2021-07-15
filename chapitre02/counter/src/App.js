import React from 'react';
import Counter from './component/Counter';
import './App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0,
      count2: 0
    }
  }


  addCounter = () => {
    let count = this.state.count + 1
    if (count <= this.state.count2 && this.state.count<99) {
      this.setState((prevState) =>{ 
        return {count: prevState.count +1} })
      if (count === this.state.count2) {
        this.addCounter2()
      }
    }
  }

  substractCounter = () => {
    if (this.state.count > 0) {
      this.setState((prevState) =>{ 
        return {count: prevState.count -1} })
      
    } else {
      this.state.count = 0;
    }
  }



  addCounter2 = () => {
    if (this.state.count2 < 100) {
      this.setState((prevState) =>{ 
        return {count2: prevState.count2 +1} })
    }
  }

  substractCounter2 = () => {
    if (this.state.count2 > 0) {
      let count2 = this.state.count2 - 1
      this.setState((prevState) =>{ 
        return {count2: prevState.count2 -1} })
      if (count2 === this.state.count) {
        this.substractCounter()
      }
    } else {
      this.state.count2 = 0;
    }
  }




  render() {

    return (
      <div>
        <Counter count={this.state.count} addCounter={this.addCounter} substractCounter={this.substractCounter} />
        <Counter count={this.state.count2} addCounter={this.addCounter2} substractCounter={this.substractCounter2} />
      </div>
    )
  }
}

export default App;
