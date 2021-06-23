import ecommerceEndPoint from "./ecommercEndPoint";

export const fetchCreateCartItem = (cartItemData) => {
    const image = cartItemData.MainImage.url_75x75;
    return dispatch => {
        fetch(`${ecommerceEndPoint}/carts/${cartItemData.cartId}/cart_items`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...cartItemData, image })
        })
        .then(resp => resp.json())
        .then(json => dispatch({
            type: 'ADD_CART_ITEM', 
            cartItem: json.data.attributes, 
            cartItemId: json.data.id, 
            total: json.included[0].attributes.total
        }))
        .catch(e => window.alert(e.messages))
    }
}

