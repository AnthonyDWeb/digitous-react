import React from 'react';
import Counter from './component/Counter';

import './App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }
  }
  addCounter = () => {
    let newState = {
      ...this.state,
      count: this.state.count +1
    }
    this.setState(newState)
  }

  substractCounter = () => {
    let newState = {
      ...this.state,
      count: this.state.count - 1
    }
    this.setState(newState)
  }

  render() {
    
    return (
      <div>
        <Counter count={this.state.count} addCounter={this.addCounter} substractCounter={this.substractCounter}
         />
        {/* <Button text="+" onClick={() => {
          let newState = {
            ...this.state,
            count: this.state.count + 1
          }
          this.setState(newState)
        }}/> */}
      </div>
    )
  }
}

export default App;
