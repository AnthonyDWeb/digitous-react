import React from 'react';
import './App.css';
import Json from "./userInfo.json" 
import UserInfo from './components/UserInfo';

class App extends React.Component{
  render() {
    return(
      <div>
        <UserInfo userInfo={Json.map( (item)=> <p>Name: {item.name} , E-mail: {item.email} , Website: {item.website}</p> ) } />
      </div>
    )
  }
} 

export default App;
