import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import store from 'store'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import firebase,{firestore} from '../../firebase/firebase.utils'
import swal from '@sweetalert/with-react';
import axios from 'axios'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  selectCurrentUser
} from '../../redux/user/user.selectors'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  CartDropdownContainer,
  CartDropdownButton
} from './checkout.styles';






const CheckoutPage = ({ cartItems, history, total, user }) => {

  const handleSubmit = () => {
      // alert('pikabuuu')
      if(!store.get('userId')) {
        history.push('/signin');
      }else {


      //   axios({
      //     url: 'http://localhost:5000/test',
      //     method: 'post',
      //     data: {
      //         amount: "priceForStripe"
      //     }
      // }).then((response) => {
      //     alert('Payment Successful!')
      //     console.log(response)
      // }).catch((error) => {
      //     console.log(` Error: ${error}`)
      //     alert('There was an issue !')
      // })



        // const mongoose = require('mongoose')
        // mongoose.connect('mongodb+srv://level9Nine99:shwdbhgAHGF$$@cluster0.mygli.mongodb.net/order?retryWrites=true&w=majority', {
        //   useNewUrlParser: true, useCreateIndex: true
        // }).then(() => {
        //   console.log('MongoDB Connected…')
        // })
        // .catch(err => console.log(err))




        // console.log(user)

        
        //   const userID = store.get('userId').id
        //   const userRef = firestore.doc(`orders/${userID}`)
        //   const snapShot =  userRef.get()

        //   snapShot.then(function(snapShot) { 
        //       if(!snapShot.exists){ 
        //           try {
        //             userRef.set({
        //               //  sharedWith: [{ who: "third@test.com", when: new Date() }] 
        //               // items: [ { who: "third@test.com" } ]
        //               list: [{
        //                 userDetails: user,
        //                 cartDetails : cartItems
        //               }] 
        //           })


        //           swal({
        //             title: "Order Placed!",
        //             text: "Please Wait!",
        //             icon: "success",
        //             buttons: false,
        //             timer: 5000,
        //           });



        //           }catch(error) {
        //               console.log('error checking outta item ->   ', error.message)
        //           }
        //       }
        //   })

      

      }
  }
  
  return (
  <CheckoutPageContainer>
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
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ₹{total}</TotalContainer>

    
    
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
)}


/*
<WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>

    

    <CartDropdownButton
    onClick={() => handleSubmit()}
    >
       BUY NOW
    </CartDropdownButton>

     <StripeCheckoutButton price={total} />
*/
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);