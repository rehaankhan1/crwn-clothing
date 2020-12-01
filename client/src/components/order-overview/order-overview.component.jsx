import React from 'react';
import { connect } from 'react-redux';
import OrderListShowAgain from './order-overview.container'
import {
    CheckoutPageContainer,
} from './order-overview.component.styles'
import Spinner from '../../components/spinner/spinner.component'



const OrderListShow = ({orderListDB1}) => {

return orderListDB1.orderList ? 
                  <React.Fragment> 
                       <CheckoutPageContainer>
        
        <br></br> 
        
                     <OrderListShowAgain orderListDB={orderListDB1.orderList}/>     </CheckoutPageContainer>
                              
                      </React.Fragment> : 
                      
                      <Spinner />
}

const mapStateToProps = (state) => ({
    orderListDB1: state.orderList
})


export default connect(mapStateToProps)(OrderListShow)
