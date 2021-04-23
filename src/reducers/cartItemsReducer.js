const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return [...state, ...action.customer.attributes.cart_items]

        case 'LOG_OUT':
            return [];

        case 'ADD_CART_ITEM':
            return [...state, action.cartItem]

        default:
            return state;
    }
}

export default customerReducer;