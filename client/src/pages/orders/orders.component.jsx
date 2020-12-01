import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component'
import OrderListShow from '../../components/order-overview/order-overview.component'
import {Heading} from './orders.styles'
           

import {fetchOrderAgain} from '../../redux/orders/orders.actions'

  const OrderPage = ({ fetchOrderAgain}) => {
    
        fetchOrderAgain()
    

    return(
        <Suspense fallback={<Spinner />}>
                    <Heading><h1>YOUR ORDERS:</h1></Heading>
                       <OrderListShow  />
         </Suspense>
        
    )

  }


  const mapDispatchToProps = dispatch => ({
    fetchOrderAgain: () => {dispatch(fetchOrderAgain())}
  })

  
  export default connect(null, mapDispatchToProps)(OrderPage)