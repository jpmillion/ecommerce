import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingListings } from './actions/fetchTrendingListings';
import { fetchCreateCartItem } from './actions/fetchCreateCartItem';
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';
import { displayCart } from './helpers';

class ListingsContainer extends PureComponent {

  render() {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        {displayCart()}
        <Listings products={this.props.trendingListings} addToCart={this.props.fetchCreateCartItem} cartId={this.props.cartId}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingListings: state.trendingListings,
    loading: state.loading,
    loggedIn: state.logIn,
    cartItems: state.cartItems,
    firstName: state.customer.first_name,
    cartId: state.cart.id,
    cartTotal: state.cart.total
  }
}

export default connect(mapStateToProps, { fetchTrendingListings, fetchCreateCartItem })(ListingsContainer);