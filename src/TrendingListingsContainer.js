import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCreateCartItem } from './actions/fetchCreateCartItem';
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from './helpers';

const ListingsContainer = props => {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        {displayCart()}
        <Listings products={props.trendingListings} />
      </div>
    );
}

const mapStateToProps = state => {
  return {
    trendingListings: state.trendingListings,
    loading: state.loading,
    cartId: state.cart.id,
  }
}

export default connect(mapStateToProps, { fetchCreateCartItem })(ListingsContainer);