import CartActionTypes from './cart.types'
import {  addItemToCart, removeItemFromCart, removeItemCompletely, removeEachItems  } from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

            // case CartActionTypes.GET_CART_ITEM:
            //     return {
            //         cartItems: getCartItemFromFirebase()
            //     }

            case CartActionTypes.SEND_CART_ITEM:
                return {
                    ...state,
                    cartItems: action.payload
                }

            case CartActionTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems:addItemToCart(state.cartItems, action.payload)
                }

                case CartActionTypes.REMOVE_ITEM:
                    return {
                        ...state,
                        cartItems: removeItemFromCart(state.cartItems, action.payload)
                    }

                case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return {
                        ...state,
                        cartItems: removeItemCompletely(state.cartItems, action.payload)
                    }

                case CartActionTypes.CLEAR_OFF_CART:
                    return{
                        ...state,
                        cartItems:  removeEachItems(state.cartItems)
                    }

                // case CartActionTypes.GET_CART_DOCS:
                //     return {
                //         ...state,
                //         //CsOcJ81OQ7WSzTHHVMoYy8Hx5Qq2
                //         cartItems: getCartItemsFromFirebaseAgain("CsOcJ81OQ7WSzTHHVMoYy8Hx5Qq2")
                //     }

                case CartActionTypes.CLEAR_CART:
                    return {
                        ...state,
                        cartItems: []
                    }

            default:
                return state;
    }
}

export default cartReducer