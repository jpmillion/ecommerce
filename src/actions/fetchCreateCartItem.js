export const fetchCreateCartItem = (cartId, quantity, price, title, description, image) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/carts/${cartId}/cart_items`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity,
                price,
                title, 
                description,
                image
            })
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_CART_ITEM', cartItem: json.data.attributes, cartItemId: json.data.id, total: json.included[0].attributes.total}))
        .catch(e => window.alert(e.messages))
    }
}