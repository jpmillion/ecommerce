

export const fetchCustomer = (email, password) => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/sessions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(j => logIn(j, dispatch)) // logIn this file line 53
        .catch(e => window.alert(e.messages))
    }
}

export const register = (email, password_digest, first_name) => {

    return dispatch => {
        fetch('http://localhost:3001/api/v1/customers', {
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
            sessionStorage.setItem('token', json.token)
            dispatch({
                type: 'REGISTER', 
                customer: { id: json.customer.data.id, ...json.customer.data.attributes }, 
                cart: { id: json.customer.included[0].id, ...json.customer.included[0].attributes }
            })
        })
        .catch(e => window.alert(e.errors))
    }
}

export const authenticate = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/customers/authenticate', { headers: { ...sessionStorage } })
        .then(r => r.json())
        .then(j => logIn(j, dispatch)) // logIn this file line 53
        .catch(e => window.alert(e))
    }
}

const logIn = (j, dispatch) => {
    if (!sessionStorage.token) sessionStorage.setItem('token', j.token);
    const { id } = j.customer.data
    const { first_name, last_name, email, cart, cart_items, orders, order_items } = j.customer.data.attributes
    dispatch({
        type: 'LOG_IN',
        customer: { id, first_name, last_name, email },
        cart,
        cart_items,
        orders,
        order_items
    })
}