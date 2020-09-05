export const addItemToCart = (cartItems, cartItemToAdd) => {
    //find function will iterate
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )


    if(existingCartItem) {
        //The map() method creates a new array with the results of calling a function for every array element.
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
              ? {...cartItem, quantity: cartItem.quantity + 1}
              : cartItem
            )
    }

    //this will run by default when item is added first time
    return [...cartItems, {...cartItemToAdd, quantity:1}]

}