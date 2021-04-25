export const displayNumOfCartItems = cartItems => {
    return cartItems.reduce((t, {quantity}) => {return t + quantity}, 0)
}