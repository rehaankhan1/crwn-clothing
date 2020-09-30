import {  all, call  } from 'redux-saga/effects'

import {userSagas} from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'
import {shopSagas} from './shop/shop.sagas'

export default function* rootSaga() {
    //whenever we want to add a new saga
    //we will add to this array list
    //making it easier in sagaMiddleware
    yield all ([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ])
}