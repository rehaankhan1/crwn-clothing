import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component'
import OrderListShow from '../../components/order-overview/order-overview.component'
import {Heading} from './orders.styles'
import store from 'store'
           

import {fetchOrderAgain} from '../../redux/orders/orders.actions'

  const OrderPage = ({ fetchOrderAgain}) => {

    if(store.get('userId')) { 
    
        fetchOrderAgain()
    

    return(
        <Suspense fallback={<Spinner />}>
                    <Heading><h1>YOUR ORDERS:</h1></Heading>
                       <OrderListShow  />
         </Suspense>
        
    )

  }else{
    window.location.replace('/signin');
  }

  }


  const mapDispatchToProps = dispatch => ({
    fetchOrderAgain: () => {dispatch(fetchOrderAgain())}
  })

  
  export default connect(null, mapDispatchToProps)(OrderPage)