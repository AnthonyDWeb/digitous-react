import React from "react";

class Counter extends React.Component {

  render() {

    return (
      <div>
        <h1>Counter</h1>
        <h2> {this.props.count}</h2>

        <button onClick={this.props.substractCounter}> - </button>

        <button onClick={this.props.addCounter}>+</button>
      </div>

    )
  }
}

export default Counter