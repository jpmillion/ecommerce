export const fetchCreateCartItem = (cartId, quantity, price) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}/cart_items`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity,
                price
            })
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_CART_ITEM', cartItem: json.data.attributes, total: json.included[0].attributes.total}))
        .catch(e => window.alert(e.messages))
    }
}