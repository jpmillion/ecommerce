import React from 'react';
import { connect } from 'react-redux';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const InterestingListingsContainer = props => {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <Listings products={props.listings}/>
        {displayCart()}
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