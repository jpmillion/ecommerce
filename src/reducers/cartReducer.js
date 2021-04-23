const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                total: action.customer.attributes.cart.total,
                id: action.customer.attributes.cart.id
            };

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

        default:
            return state;
    }
}

export default cartReducer;