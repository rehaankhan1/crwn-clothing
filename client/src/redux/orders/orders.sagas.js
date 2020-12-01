import { takeLatest, call, put, all } from 'redux-saga/effects'
import OrderActionTypes from './orders.types'
import axios from 'axios'
import store from 'store'
import {getOrderAgain} from './orders.actions'

export function* fetchOrderAgain() {
    if(store.get('userId')) {
        const userId = yield store.get('userId').id

        try {           
            const result = axios({
                url: 'orders',
                method: 'post',
                data: {
                    userId: `${userId}`
                }
            })

            const res = yield result

            console.log(`LOOK HEREYYY ->> ${res.data }`)
            

            if (res.status >= 200 && res.status < 300) {
                yield put(getOrderAgain(res.data))
                return;
            }          
        }catch(e) {
           
        }   
    }
}

export function* startFetchingOrder() {
    yield takeLatest(
        OrderActionTypes.FETCH_ORDER_AGAIN,
        fetchOrderAgain
    )
}








export function* orderSagas() {
    yield all([
        call(startFetchingOrder)
    ])
}