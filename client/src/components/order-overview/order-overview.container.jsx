import React from 'react';  
import CartItemOneTwo from '../cartItemOne/cartItemOne.component'
import axios from 'axios'
import {
      CheckoutHeaderContainer,
      HeaderBlockContainer,
      StatusPending,
      Heading,
      Division,
      HeadingLight,
      Date,
      Billed,
      AddressOwner,
      Address,
      StatusSuccessful,
      StatusCancelled,
      BoxContainer,
      SubTotal,
      TotalNum,
      FlexContainer,
      InsideFlexContainer,
      CancelButton
    } from './order-overview.container.styles';
  var dateFormat = require('dateformat');
   
const OrderListShowAgain = orderListDB => {

  const handleCancel = (_id) => {
    // console.log(_id)
    axios({
      url: 'delete',
      method: 'post',
      data: {
          _id
      }
  }).then((response) => {
      console.log(response)
      window.location.replace('/orders');
  }).catch((error) => {
      console.log(` Error: ${error}`)
      alert('There was an issue !')
  })
  }

    console.log(orderListDB)
    if(orderListDB.orderListDB){
        
        return (orderListDB.orderListDB.map((orderLatest) => {

          return ( 
          <BoxContainer>

            {
              orderLatest.status === 0 ? <StatusPending>PENDING</StatusPending> : 
              orderLatest.status === 1 ?  <StatusSuccessful>SUCCESSFUL</StatusSuccessful> :
              <StatusCancelled>CANCELLED</StatusCancelled>
            }

             {/* <StatusPending>PENDING</StatusPending> */}
           {/* <StatusSuccessful>SUCCESSFUL</StatusSuccessful> */}
           {/* <StatusCancelled>CANCELLED</StatusCancelled> */}
           <Division><Heading>Invoice </Heading> <HeadingLight> #{orderLatest.orderId}</HeadingLight></Division> 
           <Date>{dateFormat(orderLatest.time, "fullDate")}</Date>
           
           <Billed>BILL TO</Billed>
           <AddressOwner>{orderLatest.userInfo.displayName}</AddressOwner>
           <Address>{orderLatest.userInfo.address + " " + orderLatest.userInfo.postal}
           </Address>

<br></br>
<br></br>
           <CheckoutHeaderContainer>
            <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Total</span>
      </HeaderBlockContainer>
            </CheckoutHeaderContainer>

           







           {orderLatest.cart.map((itemOne) => {
             return (
                <React.Fragment>
                   
                    <CartItemOneTwo cartItemList={itemOne} />
                   
             </React.Fragment>
                 )
            })}

            <FlexContainer>

                <InsideFlexContainer>
                  {
                    orderLatest.status === 0 ?   <CancelButton onClick={() => handleCancel(orderLatest._id)}>Cancel</CancelButton> : null
                  }
               
                </InsideFlexContainer>   


                <InsideFlexContainer>
                <SubTotal>SUBTOTAL</SubTotal>
            <TotalNum>₹{orderLatest.total}</TotalNum>
                </InsideFlexContainer>




            </FlexContainer>

            

        </BoxContainer>
        )


        }))
    }

}

  export default OrderListShowAgain

