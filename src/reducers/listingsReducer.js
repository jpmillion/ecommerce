const listingsReducer = (state = { listings: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_LISTINGS':
        return {
          ...state,
          listings: [...state.listings],
          loading: true
        }
      case 'ADD_LISTINGS':
        return {
          ...state,
          listings: action.listings,
          loading: false
        }
      default:
        return state;
    }
  }
  
  export default listingsReducer;