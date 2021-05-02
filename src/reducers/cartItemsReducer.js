const cartItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return [...state, ...action.cart_items]

        case 'LOG_OUT':
            return [];

        case 'ADD_CART_ITEM':
            action.cartItem.id = action.cartItemId;
            return [...state, action.cartItem];

        case 'DELETE_CART_ITEM':
            const cartItems = state.filter(item => item.id !== action.cartItemId)
            return cartItems;

        case 'UPDATE_CART_ITEM_QUANTITY':
            action.cartItem.id = action.cartItemId;
            return [...state.filter(item => item.id !== action.cartItemId), action.cartItem]

        case 'EMPTY_CART':
            return []

        default:
            return state;
    }
}

export default cartItemReducer;