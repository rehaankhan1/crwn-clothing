import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey =  'pk_test_51HQaUrGWA7DG3ivYQzHu3B5y5MY6Qywa7b31GZnEFybTgehsc6jC9d2fACX1DJ7caT5APVN8y73zfLcQm0iYSWcH00eLf3lxAU'


  const  onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then((response) => {
            alert('Payment Successful!')
        }).catch((error) => {
            console.log(`Payment Error: ${error}`)
            alert('There was an issue with your payment!')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )

}

export default StripeCheckoutButton