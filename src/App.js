
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
import { authenticate } from './actions/fetchCustomer';
import { connect } from 'react-redux';
import { fetchTrendingListings } from './actions/fetchTrendingListings';
import { fetchListings } from './actions/fetchListings';

class App extends Component {

  componentDidMount() {
    if (sessionStorage.token) this.props.authenticate();
    !this.props.listings.length && this.props.fetchListings();
    !this.props.trendingListings.length && this.props.fetchTrendingListings();
  }

  render() {
    
    return (
      <div> 
        <h1 className='jumbo text-center text-secondary'>Ecommerce</h1> 
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

const mapStateToProps = state => {
  return {
    listings: state.listings,
    trendingListings: state.trendingListings,
  }
}

export default connect(mapStateToProps, { 
  authenticate,
  fetchListings,
  fetchTrendingListings
})(App);
