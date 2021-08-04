import React from "react";

class Counter2 extends React.Component {

  render() {

    return (
      <div className="btnContainer"> 
      <div className="titleContainer">
        <h1 className="title" >Counter 2 : </h1> 
        <h2 className="valueCounter"> {this.props.count2}</h2>
      </div>

        <button className="btnCounter" style={{background : "red"}} onClick={this.props.substractCounter2}> - </button>

        <button className="btnCounter" style={{background : "green"}} onClick={this.props.addCounter2}>+</button>
      </div>

    )
  }
}

export default Counter2