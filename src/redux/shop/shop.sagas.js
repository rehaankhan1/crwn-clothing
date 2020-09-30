//WILL LISTEN FOR EVERY ACTION
import { takeLatest, call, put, all } from 'redux-saga/effects'
import ShopActionTypes from './shop.types'

import {    firestore, convertCollectionsSnapshotToMap  } from '../../firebase/firebase.utils'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

//PAUSE AS SOON AS IT GET YIELD
export function* fetchCollectionsAsync() {
    try {
 
    const collectionRef = firestore.collection('collections')
    
    //this value come back in promised form
    const snapshot = yield collectionRef.get()

    //call effect invoke method, 1st para is func, 2nd para is snapshot
    const collectionsMap = yield call(convertCollectionsSnapshotToMap,  snapshot)

    //put is saga effect to dispatch actions
    yield put(fetchCollectionsSuccess(collectionsMap))

    }catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}