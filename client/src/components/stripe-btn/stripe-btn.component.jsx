import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default function StripeCheckoutBtn({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KWuPLKphM6agqFd7XoBHtpu9ST6TwTPUUk6Yft06TMcXyvTNlReBqrIgM3zeN6BasszPA7YN2BtDstaGrNSTR9d00fv8OYQKw";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Succesful!");
      })
      .catch((err) => {
        console.log("Payment error: ", JSON.parse(err));
        alert(
          "There awas an issue with your payment. please sure you use the provided credit card"
        );
      });
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
