import {  createStore, applyMiddleware  } from 'redux';

import {persistStore} from 'redux-persist'

//logger helps in logging all activities
import logger from 'redux-logger';
import rootReducer from './root-reducer'

const middlewares = []

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default {store, persistor}