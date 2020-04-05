import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

type Props = {
  price: number;
};

const StripeButton = ({ price }: Props) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_LddImkSxhKoflpgsGehqqWPR';

  const onToken = (token: Token) => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Libre'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
