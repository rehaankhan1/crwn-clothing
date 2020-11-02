import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})


export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const getCartItems = data => ({
    type: CartActionTypes.GET_CART_ITEM,
    payload: data
})

export const sendCartItem = data => ({
    type: CartActionTypes.SEND_CART_ITEM,
    payload: data
})



// export const getCartDocs = () => ({
//     type: CartActionTypes.GET_CART_DOCS
// })