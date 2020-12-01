import OrderActionTypes from './orders.types'

const INITIAL_STATE = {
    orderList: null
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OrderActionTypes.GET_ORDER_AGAIN:
            return {
                ...state,
                orderList: action.payload
            }

            default:
                return state
    }
}

export default orderReducer