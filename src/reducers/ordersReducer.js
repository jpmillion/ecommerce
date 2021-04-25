const ordersReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.customer.attributes.orders;

        case 'LOG_OUT':
            return []

        case 'CREATE_ORDER_AND_ITEMS':
            action.order.id = action.id
            return [...state, action.order]
    
        default:
            return state;
    }
}

export default ordersReducer;