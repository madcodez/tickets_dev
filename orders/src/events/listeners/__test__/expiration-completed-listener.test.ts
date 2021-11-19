import { ExpirationCompletedListener } from "../expiration-completed-listeners";
import { natsWrapper } from "../../../nats-wrapper";
import { Ticket } from "../../../models/ticket";
import mongoose from "mongoose";
import { Order, OrderStatus } from "../../../models/order";
import { Message } from "node-nats-streaming";
import { ExpirationCompletedEvent } from "@madtickets/common";

const setup = async () => {
  const listener = new ExpirationCompletedListener(natsWrapper.client);

  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 10,
  });
  await ticket.save();
  const order = Order.build({
    userId: "asdadad",
    status: OrderStatus.Created,
    expiresAt: new Date(),
    ticket,
  });
  await order.save();

  const data: ExpirationCompletedEvent["data"] = {
    orderId: order.id,
  };
  //@ts-ignore
  const msg: Message = { ack: jest.fn() };

  return { order, ticket, msg, listener, data };
};

it("update the order status to cancelled ", async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it("emit  order status to cancelled ", async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const eventData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );
  expect(eventData.id).toEqual(order.id);
});
