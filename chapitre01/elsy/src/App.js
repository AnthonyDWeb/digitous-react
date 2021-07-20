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
    this.setState({ heart: e.target.value })
  }

  onStepsChange = (e) => {
    this.setState({ steps: e.target.value })
  }

  onTemperatureChange = (e) => {
    this.setState({ temperature: e.target.value })
    this.calculateWater(e)
  }

  calculateWater = (e) => {


    console.log('state temperature value: ' + this.state.temperature)
    console.log('target value: ' + e.target.value)

    if ((e.target.value - 20) >= 0 && this.state.temperature < e.target.value) {

      console.log("condition rempli")

      this.setState(() => {
        return {
          water: this.state.water + ((e.target.value - 20) * 0.02)
        }
      })

    } else if ((e.target.value - 20) >= 0 && this.state.temperature > e.target.value) {
      this.setState((prevState) => {
        return {
          water: prevState.water - ((e.target.value - 20) * 0.02)
        }
      })
      console.log("condition non rempli")
    }

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