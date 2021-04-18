
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingsContainer from './ListingsContainer';


class App extends Component {

  render() {
    
    return (
      <Router>
        <Switch>
          <Route path='/listings'>
            <ListingsContainer />
          </Route>
          <Route path='/'>
            home
          </Route>
        </Switch>
      </Router>
      // <div className="App">
      //   <ListingsContainer />
      // </div>
    );
  }
}

export default App;
