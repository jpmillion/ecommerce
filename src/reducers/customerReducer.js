const customerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, ...action.customer };

        case 'LOG_OUT':
            return {};

        case 'REGISTER':
            return action.customer

        default:
            return state;
    }
}

export default customerReducer;