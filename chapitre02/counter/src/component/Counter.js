import React from "react";

class Counter extends React.Component {

  render() {

    return (
      <div className="btnContainer"> 
      <div className="titleContainer">
        <h1 className="title" >Counter : </h1> 
        <h2 className="valueCounter"> {this.props.count}</h2>
      </div>

        <button className="btnCounter" style={{background : "red"}} onClick={this.props.substractCounter}> - </button>

        <button className="btnCounter" style={{background : "green"}} onClick={this.props.addCounter}>+</button>
      </div>

    )
  }
}

export default Counter