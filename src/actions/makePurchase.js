import ecommerceEndPoint from "./ecommercEndPoint";

export const createOrderAndItems = (customerId, cart, cartItems) => {
    return dispatch => {
        fetch(`${ecommerceEndPoint}/customers/${customerId}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...cart, order_items: cartItems })
        })
        .then(resp => resp.json())
        .then(json => { 
            dispatch({type: 'CREATE_ORDER_AND_ITEMS', order: json.data.attributes, id: json.data.id})
        })
        .catch(e => window.alert(e.message))
    }
}

export const emptyCart = (cartId) => {
    return dispatch => {
        fetch(`${ecommerceEndPoint}/carts/${cartId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(dispatch({type: 'EMPTY_CART'}))
        .catch(e => window.alert(e.message))
    }
}