

export const fetchCustomer = (email, password_digest) => {
    return dispatch => {
        fetch('https://rocky-gorge-45567.herokuapp.com/api/v1/sessions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password_digest
            })
        })
        .then(resp => resp.json())
        .then(j => logIn(j, dispatch)) // logIn this file line 53
        .catch(e => window.alert(e.errors))
    }
}

export const register = (email, password_digest, first_name) => {

    return dispatch => {
        fetch('https://rocky-gorge-45567.herokuapp.com/api/v1/customers', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password_digest,
                first_name
            })
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.errors) return window.alert(json.errors)
            sessionStorage.setItem('token', json.token)
            dispatch({
                type: 'REGISTER', 
                customer: { id: json.customer.data.id, ...json.customer.data.attributes }, 
                cart: { id: json.customer.included[0].id, ...json.customer.included[0].attributes },
                logIn: json.logIn
            })
        })
        .catch(e => window.alert(e.errors))
    }
}

export const authenticate = () => {
    return dispatch => {
        fetch('https://rocky-gorge-45567.herokuapp.com/api/v1/customers/authenticate', { headers: { ...sessionStorage } })
        .then(r => r.json())
        .then(j => logIn(j, dispatch)) // logIn this file line 53
        .catch(e => window.alert(e))
    }
}

const logIn = (j, dispatch) => {
    if (!sessionStorage.getItem('token')) sessionStorage.setItem('token', j.token);
    if (j.errors) return window.alert(j.errors)
    const { logIn } = j;
    const { id } = j.customer.data
    const { first_name, last_name, email, cart, cart_items, orders, order_items } = j.customer.data.attributes
    dispatch({
        type: 'LOG_IN',
        customer: { id, first_name, last_name, email },
        cart,
        cart_items,
        orders,
        order_items,
        logIn
    })
}