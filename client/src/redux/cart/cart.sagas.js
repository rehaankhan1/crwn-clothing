import {all, call, put, takeLatest} from 'redux-saga/effects'
import UserActionTypes from '../user/user.types'
import CartActionTypes from './cart.types'
// import {clearCart, getCartDocs} from './cart.actions'
import {clearCart, sendCartItem} from './cart.actions'
import {convertCartItemSnapshotToMap} from '../../firebase/firebase.utils'


import {firestore} from '../../firebase/firebase.utils'


export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* getCartItemFromFirebase({payload}) {
    // const SHOP_DATA = [
    //     {
    //         imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
    //         price: 110,
    //         name: 'Jacket Joker2',
    //         quantity: 4
    //     }
    // ]
    // alert('LOOPPAAA!!!')
    // console.log('Other Time!')
    // yield put(sendCartItem(SHOP_DATA))

    try {
        const collectionRef = firestore.collection('cartItemFb').doc(payload)
        // const snapshot = yield collectionRef.get()
        // const collectionsMap = yield call(convertCartItemSnapshotToMap,  snapshot)

        const collectionsMap = yield collectionRef.get()
            .then(doc => {
               return doc.data().items                
            }).then((data) => {
               
                return data
            })
        yield put(sendCartItem(collectionsMap))
    }catch(error){
        console.log(error)
    }


}

export function* getCartItem() {
    yield takeLatest(CartActionTypes.GET_CART_ITEM, getCartItemFromFirebase)
}

// export function* getCartItemSignIn() {
//     yield put(getCartDocs())
// }

// export function* onSignInSuccess(){
//     yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, getCartItemSignIn)
// }

export function* cartSagas() {
    yield all([call(onSignOutSuccess), call(getCartItem)])
}