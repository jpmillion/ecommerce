const logInReducer = (state = {customer: {attributes: {cart_items: []}}, loggedIn: false}, action) => {
    console.log('logInReducer')
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                customer: action.customer,
                loggedIn: true
            }
        case 'LOG_OUT':
            return {
                ...state,
                customer: {},
                loggedIn: false
            }
        default:
            return state;
    }
}

export default logInReducer;