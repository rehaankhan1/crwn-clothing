import React from 'react'

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './cartItemOne.component.styles';

const CartItemOneTwo = (cartItemList) => {
    // return cartItemList.cartItemList.name   
    const {id, imageUrl, name, price, quantity} = cartItemList.cartItemList

    return(
        
        <React.Fragment>
          


        <CheckoutItemContainer>
          
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <span>{quantity}</span>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer>
        {`₹${price*quantity}`}
      </RemoveButtonContainer>
    </CheckoutItemContainer>
    </React.Fragment>
    )
    
}

export default CartItemOneTwo