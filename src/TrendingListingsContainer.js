import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingListings } from './actions/fetchTrendingListings'
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';

class ListingsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchTrendingListings();
  }

  render() {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <Listings products={this.props.trendingListings}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingListings: state.trendingListings,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchTrendingListings })(ListingsContainer);