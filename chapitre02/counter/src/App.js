import React from 'react';

import './App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  render() {

    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() =>{
          let newState = {
            ...this.state,
            count :  this.state.count -1
          }
          this.setState(newState)
          
        }}>-</button>

        <button onClick={() =>{
          let newState = {
            ...this.state,
            count :  this.state.count +1
          }
          this.setState(newState)
            
        }}>+</button>
      </div>
    )
  }
}

export default App;
