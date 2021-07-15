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
    let newState = {
      ...this.state,
      count: this.state.count + 1
    }
    if (newState.count === this.state.count2) {
      this.addCounter2()
    }
    this.setState(newState)
  }

  substractCounter = () => {
    if (this.state.count > 0) {
      let newState = {
        ...this.state,
        count: this.state.count - 1
      }
      this.setState(newState)
    } else {
      this.state.count = 0;
    }

  }



  addCounter2 = () => {
    let newState2 = {
      ...this.state,
      count2: this.state.count2 + 1
    }
    this.setState(newState2)
  }

  substractCounter2 = () => {

    if (this.state.count2 === this.state.count + 1) {

      if (this.state.count > 0) {
        let newState2 = {
          ...this.state,
          count2: this.state.count2 - 1
        }
        this.setState(newState2)
        this.substractCounter()

      } else {

        this.state.count2 = 0;
      }
    } else {

      if (this.state.count > 0) {
        let newState2 = {
          ...this.state,
          count2: this.state.count2 - 1
        }
        this.setState(newState2)

      } else {
        this.state.count2 = 0;
      }
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
