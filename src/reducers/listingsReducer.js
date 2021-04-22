const listingsReducer = (state = [] , action) => {
    switch(action.type) {
      case 'LOADING_LISTINGS':
        return [...state]

      case 'ADD_LISTINGS':
        return [...state, ...action.listings]

      default:
        return state;
    }
  }
  
  export default listingsReducer;