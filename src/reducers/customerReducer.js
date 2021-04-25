const customerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                first_name: action.customer.attributes.first_name,
                id: action.customer.id
            };

        case 'LOG_OUT':
            return {};

        default:
            return state;
    }
}

export default customerReducer;