const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                total: action.customer.attributes.cart.total
            };

        case 'LOG_OUT':
            return {};

        default:
            return state;
    }
}

export default cartReducer;