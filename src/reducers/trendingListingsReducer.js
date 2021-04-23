const trendingListingsReducer = (state = [] , action) => {
    switch(action.type) {
      case 'LOADING_TRENDING_LISTINGS':
        return [...state]

      case 'ADD_TRENDING_LISTINGS':
        const trendingListings = action.listings.filter(listing => listing.state === 'active');
        return [...state, ...trendingListings]
        
      default:
        return state;
    }
}
    
export default trendingListingsReducer;