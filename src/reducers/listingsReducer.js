const listingsReducer = (state = [] , action) => {
    switch(action.type) {
      case 'LOADING_LISTINGS':
        return [...state]

      case 'ADD_LISTINGS':
        const listings = action.listings.filter(listing => listing.state === 'active');
        return [...state, ...listings]

      default:
        return state;
    }
  }
  
  export default listingsReducer;