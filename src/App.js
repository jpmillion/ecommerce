
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingsContainer from './ListingsContainer';
import Home from './routes/Home';
import LogIn from './routes/LogIn';

class App extends Component {

  render() {
    
    return (
      <div> 
        <h1>Ecommerce</h1> 
        <Router>
          <Switch>
            <Route path='/listings' component={ListingsContainer}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
