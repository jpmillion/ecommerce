export const deleteCartItem = (cartId, cartItemId) => {
    return dispatch => {
        fetch(`https://rocky-gorge-45567.herokuapp.com/api/v1/carts/${cartId}/cart_items/${cartItemId}`, {
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