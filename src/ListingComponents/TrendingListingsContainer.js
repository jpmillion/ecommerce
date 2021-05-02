import React from 'react';
import { connect } from 'react-redux';
import { fetchCreateCartItem } from '../actions/fetchCreateCartItem';
import Listings from './Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from '../helpers';

const ListingsContainer = props => {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <Listings products={props.trendingListings} />
        {displayCart()}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    trendingListings: state.trendingListings,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchCreateCartItem })(ListingsContainer);