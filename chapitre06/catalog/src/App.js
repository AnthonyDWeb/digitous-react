// Library
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Style CSS
import './App.css';
import Homepage from './components/Homepage';
import Movie from './components/Movie';

class App extends React.Component{

  

  render(){
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/:id" component={Movie} />
        </Switch>
    </BrowserRouter>
  }
}

export default App;
