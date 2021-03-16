import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 
import axios from 'axios'; 

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey = "pk_test_51IMvWnDgcx1UAZYMxOjMcjMz61GHBdNA4jr6ld1MnMUHc4JXTllJeHfTiCl2YoEk1s8AjKcULh0rtBMaaYFO9j1400Rf0bP6o1";

  const onToken = token => {
    axios({ 
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ' + JSON.parse(error));
      alert('There was an issue with your payments. Please make sure you use provided credit card.');
    });
  };

  return (
    <StripeCheckout 
      label = "Pay Now"
      name = "CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey = {publishableKey}
    />
  )
};

export default StripeCheckoutButton;