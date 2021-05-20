const orderItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return [...state, ...action.order_items];

        case 'LOG_OUT':
            return []

        case 'CREATE_ORDER_AND_ITEMS':
            return [...state, ...action.order.order_items]
    
        default:
            return state;
    }
}

export default orderItemsReducer;