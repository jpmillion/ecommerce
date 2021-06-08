import React from 'react';
import { connect } from 'react-redux';
import FilteredListings from './FilteredListings';

const ListingsContainer = props => {

  return (
    <FilteredListings filteredListings={props.listings} />
  );
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(ListingsContainer);