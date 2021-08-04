// Library
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Style CSS
import './App.css';

// Views
import Homepage from './views/Homepage';
import Favorite from './views/Favorite';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/Weekly-battle';
import Popular from './views/Popular';
import PopularBattle from './views/Popular-battle';

// Components
import Navbar from './components/Navbar';



class App extends React.Component{

  

  render(){
    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/favorite" component={Favorite} />
            <Route  path="/weekly" component={Weekly} />
            <Route  path="/weekly-battle" component={WeeklyBattle} />
            <Route  path="/popular" component={Popular} />
            <Route  path="/popular-battle" component={PopularBattle} />
        </Switch>
    </BrowserRouter>
  }
}

export default App;
