import Cart from "./customer/Cart"

export const displayNumOfCartItems = cartItems => {
    return cartItems.reduce((t, {quantity}) => {return t + quantity}, 0)
}

export const displayCart = () => {
    if (sessionStorage.token) return <Cart />
}