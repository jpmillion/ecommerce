export const updateCartItemQuantity = (cartId, cartItemId, quantity) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}/cart_items/${cartItemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity
            })
        })
        .then(resp => resp.json())
        .then(json => dispatch({
            type: 'UPDATE_CART_ITEM_QUANTITY', 
            cartItem: json.data.attributes, 
            cartItemId, 
            total: json.included[0].attributes.total
        }))
        .catch(e => window.alert(e.messages))
    }
}