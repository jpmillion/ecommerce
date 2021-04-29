
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingsContainer from './ListingsContainer';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import TrendingListingsContainer from './TrendingListingsContainer';
import ViewCart from './ViewCart';
import RegisterForm from './customer/RegisterForm';

class App extends Component {

  render() {
    
    return (
      <div> 
        <h1>Ecommerce</h1> 
        <Router>
          <Switch>
            <Route path='/trendingListings' component={TrendingListingsContainer} />
            <Route path='/listings' component={ListingsContainer}/>
            <Route path='/cart' component={ViewCart}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/register' component={RegisterForm}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
