import OrderActionTypes from './orders.types'

export const getOrderAgain = (data) => ({
    // console.log(`hereeeeyyyyyyyy    y-> ${ Object.keys(data['data']['0']) }`)
    // console.log(`againyee    ----> ${data['data']}`)
    // console.log(JSON.stringify(data['data']))
    type: OrderActionTypes.GET_ORDER_AGAIN,
    payload: data
})

export const fetchOrderAgain = () => ({
    type: OrderActionTypes.FETCH_ORDER_AGAIN
})