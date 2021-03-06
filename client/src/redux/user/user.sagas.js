import {takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import {getCartItems} from '../cart/cart.actions'
import store from 'store'

import {SignInSuccess, SignInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions'
// import {getCartDocs} from '../cart/cart.actions'

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(SignInSuccess({ id: userSnapshot.id,  ...userSnapshot.data()}))
        yield put(getCartItems(userSnapshot.id))
        yield store.set('userId', { id:userSnapshot.id })
        // yield put(getCartDocs())
    }catch(error) {
        yield put(SignInFailure(error))
    }
}

export function* signUpWithEmail({payload: {displayName,  email,  password,  phoneNum,  address, postal}}) {
    try{
            const {user} = yield auth.createUserWithEmailAndPassword(email, password);
            const userRef = yield call(createUserProfileDocument, user, {displayName,  phoneNum,  address, postal})
            const userSnapshot = yield userRef.get()
            yield put(signUpSuccess({ id: userSnapshot.id,  ...userSnapshot.data()}))
            console.log('TRIGGERED!')    

            yield put(getCartItems(userSnapshot.id))
            yield store.set('userId', { id:userSnapshot.id })       
    }catch(error) {
            yield put(signUpFailure(error))
    }
}



export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
       
    }catch(error) {
        yield put(SignInFailure(error))
    }
}

export function*  signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    }catch(error) {
        yield put(SignInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    }catch(error) {
        yield put(SignInFailure(error))
    }
}   

export function* signOut() {
   try{
    yield auth.signOut()
    store.remove('userId')
    yield put(signOutSuccess())
   }catch(error) {
        yield put(signOutFailure(error))
   }
}



export function* onGoogleSignInStart() {
 yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onEmailSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onEmailSignUpStart)
    ])
}