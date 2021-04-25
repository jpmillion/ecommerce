const orderItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.customer.attributes.order_items;

        case 'LOG_OUT':
            return []

        case 'MAKE_PURCHASE':
            return [...state, ...action.order.order_items]
    
        default:
            return state;
    }
}

export default orderItemsReducer;