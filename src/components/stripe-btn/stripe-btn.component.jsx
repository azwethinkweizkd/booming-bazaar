import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutBtn({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KWuPLKphM6agqFd7XoBHtpu9ST6TwTPUUk6Yft06TMcXyvTNlReBqrIgM3zeN6BasszPA7YN2BtDstaGrNSTR9d00fv8OYQKw";

  const onToken = (token) => {
    // console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
