import React from "react";
import Box from "./components/Box";

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

  constructor() {
    super();

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }

  onHeartChange = (e) => {
    this.setState((prevState) =>{ 
      return {
        ...prevState,
        heart: e.target.value 
      }
    });
    this.calculateWater(this.state.value,e.target.value, this.state.steps);
  }
  
  onStepsChange = (e) => {
    this.setState((prevState) =>{ 
      return {
        ...prevState,
        steps: e.target.value 
      }
    });
    this.calculateWater(this.state.temperature,this.state.heart, e.target.value);
  }

  onTemperatureChange = (e) => {
  this.setState((prevState) =>{ 
    return {
      ...prevState,
      temperature: e.target.value 
    }
  });
    this.calculateWater(e.target.value,this.state.heart, this.state.steps)
  }

  calculateWater = (temperature,heart,steps) => {
      let myWater = 1.5;
      if (temperature >= 20) {
        myWater = myWater + ((temperature - 20) * 0.02) 
      };
      if (steps >= 10000) {
        myWater = myWater + ((steps - 10000) * 0.00002) 
      };
      if (heart >= 120) {
        myWater = myWater + ((heart - 120) * 0.008) 
      };
      this.setState((prevState) =>{ 
        return {
          ...prevState,
          water: myWater 
        }
      });
  }


  render() {

    return (

      <div className="container-fluid">
        <div className="row">
          {/* WATER */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          {/* STEPS */}
          <Box onChange={this.onStepsChange} icon="directions_walk" color="black" value={this.state.steps} valueMin={stepsMin} valueMax={stepsmax} unit="steps" />
          {/* HEART */}
          <Box onChange={this.onHeartChange} icon="favorite" color="red" value={this.state.heart} valueMin={heartMin} valueMax={heartmax} unit="bpm" />
          {/* TEMPERATURE */}
          <Box onChange={this.onTemperatureChange} icon="wb_sunny" color="yellow" value={this.state.temperature} valueMin={tempMin} valueMax={tempMax} unit="°C" />
        </div>
      </div>

    )

  }
}

export default App;