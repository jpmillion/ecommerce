const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return [...state, ...action.customer.attributes.cart_items]

        case 'LOG_OUT':
            return [];

        default:
            return state;
    }
}

export default customerReducer;