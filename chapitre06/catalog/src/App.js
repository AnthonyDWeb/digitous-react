import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends React.Component{
  render(){
    return <BrowserRouter>
        <Switch>
          <Route exact path="/" component={}/>
          <Route  path="/:id" component={}/>
        </Switch>
    </BrowserRouter>
  }
}

export default App;
