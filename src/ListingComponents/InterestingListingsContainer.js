import React from 'react';
import { connect } from 'react-redux';
import FilteredListings from './FilteredListings';

const InterestingListingsContainer = props => {
    
    return (
      <FilteredListings filteredListings={props.listings} />
    );
}

const mapStateToProps = state => {
  return {
    listings: state.interestingListings,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(InterestingListingsContainer);