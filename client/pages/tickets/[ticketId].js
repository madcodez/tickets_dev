import React from "react";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const ShowTicket = ({ ticket }) => {
  const uri = "/api/orders";
  const method = "post";
  const body = {
    ticketId: ticket.id,
  };
  const onSuccess = (order) => {
    console.log(order);
    Router.push("/orders/[orderId]", `/orders/${order.id}`);
  };
  const { doRequest, errors } = useRequest({ uri, method, body, onSuccess });
  return (
    <div>
      <h1>{ticket.title}</h1>
      <h3>Price : {ticket.price}</h3>

      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};
ShowTicket.getInitialProps = async (context, client, currentUser) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);
  console.log(data);
  return { ticket: data };
};
export default ShowTicket;
