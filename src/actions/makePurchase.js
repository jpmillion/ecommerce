export const createOrderAndItems = (customerId, cart, cartItems) => {
    console.log('b')
    return dispatch => {
        console.log('c')
        fetch(`http://localhost:3001/api/v1/customers/${customerId}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...cart, order_items: cartItems })
        })
        .then(resp => resp.json())
        .then(json => {
            console.log('d') 
            dispatch({type: 'CREATE_ORDER_AND_ITEMS', order: json.data.attributes, id: json.data.id})
        })
        .catch(e => window.alert(e.message))
        console.log('e')
    }
    console.log('f')
}

export const emptyCart = (cartId) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(dispatch({type: 'EMPTY_CART'}))
        .catch(e => window.alert(e.message))
    }
}