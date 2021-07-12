import React from "react";
import Steps from "./components/Steps";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

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
          <p>Heart: {heartMin}</p>
          <p>Temp: {tempMin}</p>
          <p>Stepst: {stepsMin}</p>
          <Steps />
        </div>
      </div>
    );
  }
}

export default App;