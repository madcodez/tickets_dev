import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export const ShowOrder = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState();

  const uri = "/api/payments";
  const method = "post";
  const body = {
    orderId: order.id,
  };
  const onSuccess = () => {
    Router.push("/orders");
  };

  const { doRequest, errors } = useRequest({ uri, method, body, onSuccess });

  useEffect(() => {
    const findTimeleft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    const interval = setInterval(findTimeleft, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [order]);
  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }
  return (
    <div>
      <h4>Time complete the purchase {timeLeft} seconds</h4>
      <StripeCheckout
        token={({ id }) => {
          console.log(id);
          doRequest({ token: id });
        }}
        amount={order.ticket.price * 100}
        email={currentUser.email}
        stripeKey="pk_test_51JqwUySI4j28n8rtBtSpqV38Q4V37CwS88Eh1Mv4A1DC3Xw1skehWO8bHCMte9dNFuSP5WYII2YdsjMVVazPSV8U001c8kdqUL"
      />
    </div>
  );
};
ShowOrder.getInitialProps = async (context, client, currentUser) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data, currentUser };
};
export default ShowOrder;
