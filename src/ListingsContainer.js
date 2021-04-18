
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from './actions/fetchListings'
import Listings from './listingComponents/Presentational/Listings';
import { NavLink } from 'react-router-dom';

class ListingsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <Listings products={this.props.listings}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchListings })(ListingsContainer);