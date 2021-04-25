export const createOrderAndItems = (customerId, cart, cartItems) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/customers/${customerId}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...cart, order_items: cartItems })
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'MAKE_PURCHASE', order: json.data.attributes, id: json.data.id}))
        .catch(e => window.alert(e.message))
    }
}

export const createOrderItems = (orderId, cartItems) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/orders/${orderId}/order_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...cartItems })
        })
        .then(resp => resp.json())
        .then(j => console.log(j))
        .catch(e => window.alert(e))
    }
}