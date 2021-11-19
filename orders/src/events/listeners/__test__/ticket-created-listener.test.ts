import { Ticket } from "../../../models/ticket";
import { TicketCreatedListener } from "../ticket-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketCreatedEvent } from "@madtickets/common";
import { Message } from "node-nats-streaming";
import mongoose from "mongoose";

const setup = async () => {
  const listener = new TicketCreatedListener(natsWrapper.client);

  const data: TicketCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "ticket",
    price: 35,
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
  };
  //@ts-ignore
  const msg: Message = { ack: jest.fn() };

  return { msg, data, listener };
};

it("create and saves a ticket", async () => {
  const { data, msg, listener } = await setup();

  await listener.onMessage(data, msg);

  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();

  expect(ticket!.title).toEqual(data.title);
  expect(ticket!.price).toEqual(data.price);
});
it("acks the message", async () => {
  const { data, listener, msg } = await setup();

  // call the onMessage function with the data object + message object
  await listener.onMessage(data, msg);

  // write assertions to make sure ack function is called
  expect(msg.ack).toHaveBeenCalled();
});
