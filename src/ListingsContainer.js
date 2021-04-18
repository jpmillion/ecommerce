
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from './actions/fetchListings'
import Listings from './ListingComponents/Presentational/Listings';

class ListingsContainer extends Component {
  
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    
    return (
      <div>
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