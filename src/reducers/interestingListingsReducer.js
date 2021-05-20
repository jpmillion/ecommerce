const interestingListingsReducer = (state = [] , action) => {
    switch(action.type) {
      case 'LOADING_INTERESTING_LISTINGS':
        return [...state]

      case 'ADD_INTERESTING_LISTINGS':
        const interestingListings = action.listings.filter(listing => listing.state === 'active');
        return [...state, ...interestingListings]
        
      default:
        return state;
    }
}
    
export default interestingListingsReducer;