const listingsReducer = (state = [] , action) => {
  console.log('listingsReducer')
    switch(action.type) {
      case 'LOADING_LISTINGS':
        return [...state]
      case 'ADD_LISTINGS':
        debugger
        return [...state, ...action.listings]
      default:
        return state;
    }
  }
  
  export default listingsReducer;