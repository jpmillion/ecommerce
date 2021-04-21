const trendingListingsReducer = (state = [] , action) => {
    switch(action.type) {
      case 'LOADING_TRENDING_LISTINGS':
        return [...state]

      case 'ADD_TRENDING_LISTINGS':
        return [...state, ...action.listings]
        
      default:
        return state;
    }
}
    
export default trendingListingsReducer;