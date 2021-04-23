import './App.css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingListings } from './actions/fetchTrendingListings';
import { fetchCreateCartItem } from './actions/fetchCreateCartItem';
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

class ListingsContainer extends PureComponent {
  
  componentDidMount() {
    !this.props.trendingListings.length && this.props.fetchTrendingListings();
  }

  displayCart = () => {
    if (this.props.loggedIn) return <Cart cartItems={this.props.cartItems} firstName={this.props.firstName} />
  }

  render() {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        {this.displayCart()}
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
    cartId: state.cart.id
  }
}

export default connect(mapStateToProps, { fetchTrendingListings, fetchCreateCartItem })(ListingsContainer);