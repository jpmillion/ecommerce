const logInReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.logIn;

        case 'LOG_OUT':
            return false;

        case 'REGISTER':
            return action.logIn;
            
        default:
            return state;
    }
}

export default logInReducer;