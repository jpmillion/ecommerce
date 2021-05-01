import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';

const InterestingListingsContainer = props => {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <Listings products={props.listings}/>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    listings: state.interestingListings,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(InterestingListingsContainer);