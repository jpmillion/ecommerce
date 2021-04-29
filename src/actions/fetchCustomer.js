

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
        .then(json => dispatch({type: 'LOG_IN', customer: json.data}))
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
            sessionStorage.setItem('jwt', json.jwt)
            dispatch({type: 'REGISTER', customer: {id: json.customer.data.id, ...json.customer.data.attributes}, cart: {id: json.customer.included[0].id, ...json.customer.included[0].attributes}})
        })
        .catch(e => window.alert(e.errors))
    }
}