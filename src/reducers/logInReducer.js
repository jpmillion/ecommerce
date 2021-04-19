const logInReducer = (state = {customer: {}, loggedIn: false}, action) => {
    console.log('logInReducer')
    switch (action.type) {
        case 'LOG_IN':
            debugger
            return {
                ...state,
                customer: action.customer,
                loggedIn: true
            }
        default:
            return state;
    }
}

export default logInReducer;