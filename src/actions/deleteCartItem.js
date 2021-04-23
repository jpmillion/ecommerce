export const deleteCartItem = (cartId, cartItemId) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}/cart_items/${cartItemId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'DELETE_CART_ITEM', cartItemId , total: json.data.attributes.total}))
        .catch(e => window.alert(e.messages))
    }
}