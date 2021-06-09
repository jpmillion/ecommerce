import React from 'react';
import { connect } from 'react-redux';
import FilteredListings from './FilteredListings';

const TrendingListingsContainer = props => {
    
    return (
      <FilteredListings filteredListings={props.trendingListings} />
    );
}

const mapStateToProps = state => {
  return {
    trendingListings: state.trendingListings,
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(TrendingListingsContainer);