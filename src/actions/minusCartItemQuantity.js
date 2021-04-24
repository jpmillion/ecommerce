export const minusCartItemQuantity = (cartId, cartItemId, quantity) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}/cart_items/${cartItemId}`, {
            method: 'patch',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity
            })
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'MINUS_CART_ITEM_QUANTITY', cartItemId , total: json.data.attributes.total}))
        .catch(e => window.alert(e.messages))
    }
}