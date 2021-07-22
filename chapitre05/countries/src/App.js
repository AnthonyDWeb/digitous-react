import React from 'react';
import './App.css';
import Button from './components/Button';
import Cards from './components/Cards';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            flag: "",
            name: "",
            capital: "",
            region: ""
        }
    }

    componentDidMount(){
          fetch("https://restcountries.eu/rest/v2/name/france")
          .then(res => res.json())
          .then(data => {
              this.setState(prevState => {
                return {
                  ...prevState,
                flag: data[0].flag,
                name: data[0].name,
                capital: data[0].capital,
                region: data[0].region
                }
              })
          })
      }

      getCountry = (country) => {
        console.log('test' , country.target.name , "test 2");
        fetch(`http://localhost:8005/country/${country.target.name}`)
        .then(res => res.json())
        .then(data => {
              
                this.setState(prevState => {
                    return {
                      ...prevState,
                    flag: data[0].flag,
                    name: data[0].name,
                    capital: data[0].capital,
                    region: data[0].region
                    }
                })
            }
        )
      }

    render(){
        return (
            <div className="main">
                  <h1 className="main-title">Country Selector</h1>
                  <Button  onClick={this.getCountry} >France</Button>
                  <Button  onClick={this.getCountry} >Brazil</Button>
                  <Button  onClick={this.getCountry} >Croatia</Button>
                  <Cards flag={this.state.flag} name={this.state.name} capital={this.state.capital} region={this.state.region} />
            </div>
        )
    }
}

export default App;
