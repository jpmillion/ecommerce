
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingsContainer from './ListingsContainer';
import Home from './routes/Home';


class App extends Component {

  render() {
    
    return (
      <Router>
        <Switch>
          <Route path='/listings' component={ListingsContainer}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
