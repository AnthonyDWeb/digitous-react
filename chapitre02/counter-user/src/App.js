import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Json from "./userInfo.json" 
import UserInfo from './components/UserInfo';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }


  addCounter = () => {
    if (this.state.count<100) {
      let count = this.state.count + 1
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
      this.setState((prevState) =>{ 
        return {count: prevState.count = 0} })
    }
  }




  render(){
    return (
      <div>
        <h1 className="main-title">Counter Users</h1>
        <Counter count={this.state.count} addCounter={this.addCounter} substractCounter={this.substractCounter} />
        {Json.map((user) => (<UserInfo name={user.name} email={user.email} />))}
      </div>
    )
  }
}

export default App;
