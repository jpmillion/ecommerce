const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, ...action.cart };

        case 'LOG_OUT':
            return {};

        case 'ADD_CART_ITEM':
            return {
                ...state,
                total: action.total
            }

        case 'DELETE_CART_ITEM':
            return {
                ...state,
                total: action.total
            }

        case 'UPDATE_CART_ITEM_QUANTITY':
            return {
                ...state,
                total: action.total
            }
        
        case 'EMPTY_CART':
            return {
                ...state,
                total: 0
            }

        case 'REGISTER':
            return action.cart

        default:
            return state;
    }
}

export default cartReducer;