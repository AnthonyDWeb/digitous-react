import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartmax = 180;
const stepsMin = 0;
const stepsmax = 50000;

class App extends React.Component {
  render() {
    return (
    
      <div className="container-fluid">
        <div className="row">
          <p>{heartMin}</p>
          <p>{tempMin}</p>
          <p>{stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;