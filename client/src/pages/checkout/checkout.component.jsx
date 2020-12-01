import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import store from 'store'
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import axios from 'axios'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {clearOffCart} from '../../redux/cart/cart.actions'

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




const CheckoutPage = ({ cartItems, history, total, user, clearOffCart }) => {

  const handleSubmit = () => {
      // alert('pikabuuu')
      if(!store.get('userId')) {
        history.push('/signin');
      }else {
  
        console.log(user)
        axios({
          url: 'test',
          method: 'post',
          data: {
              cart: cartItems,
              userDetails: user,
              total
          }
      }).then((response) => {
          alert('Payment Successful!')
          console.log(response)
          clearOffCart()
          window.location.replace('/orders');
      }).catch((error) => {
          console.log(` Error: ${error}`)
          alert('There was an issue !')
      })

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

    

    <CartDropdownButton
    onClick={() => handleSubmit()}
    >
       BUY NOW
    </CartDropdownButton>
  </CheckoutPageContainer>
)}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearOffCart: () => dispatch(clearOffCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);