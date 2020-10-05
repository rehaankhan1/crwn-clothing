import {  createStore, applyMiddleware  } from 'redux';
import {persistStore} from 'redux-persist'
//logger helps in logging all activities
import logger from 'redux-logger';
import rootReducer from './root-reducer'
//import thunk from 'redux-thunk'
//remove thunk
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware();

//remove thunk
const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default {store, persistor}