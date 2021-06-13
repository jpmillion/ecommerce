import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingsContainer from './listingComponents/ListingsContainer';
import Home from './customer/Home';
import LogIn from './customer/LogIn';
import TrendingListingsContainer from './listingComponents/TrendingListingsContainer';
import ViewCart from './customer/ViewCart';
import { authenticate } from './actions/fetchCustomer';
import { connect } from 'react-redux';
import { fetchTrendingListings, fetchActiveListings, fetchInterestingListings } from './actions/fetchListings';
import InterestingListingsContainer from './listingComponents/InterestingListingsContainer';
import OrdersContainer from './customer/OrdersContainer';

class App extends Component {

  componentDidMount() {
    if (sessionStorage.getItem('token')) this.props.authenticate();
    !this.props.listings.length && this.props.fetchActiveListings();
    !this.props.trendingListings.length && this.props.fetchTrendingListings();
    !this.props.interestingListings.length && this.props.fetchInterestingListings();
  }

  render() {
    
    return (
      <div>
        <Jumbotron fluid className='bg-dark'>
          <p className='jumbo text-center text-info'>Ecommerce</p>
        </Jumbotron> 
        <Router>
          <Switch>
            <Route path='/trendingListings' component={TrendingListingsContainer} />
            <Route path='/interestingListings' component={InterestingListingsContainer} />
            <Route path='/listings' component={ListingsContainer}/>
            <Route path='/cart' component={ViewCart}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/register' component={LogIn}/>
            <Route path='/orders/history' component={OrdersContainer}/>
            <Route path='/ecommerce' component={Home}/>
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
    interestingListings: state.interestingListings
  }
}

export default connect(mapStateToProps, { 
  authenticate,
  fetchActiveListings,
  fetchTrendingListings,
  fetchInterestingListings
})(App);
