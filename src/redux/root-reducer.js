//here we will combine all the reducers from other file because it is a root reducer
import {  combineReducers  } from 'redux';
import  userReducer   from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    //key-value pair
    user: userReducer,
    cart: cartReducer
})